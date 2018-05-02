/*
 * Eter v1.0
 * El prototipo Eter v1.0 mide la calidad de aire mediante el sensor 
 * de particulas Sharp GP2Y1010AU0F y mide la temperatura y humedad relativa 
 * mediante el sensor DHTXX.
 * Para más información revisar el repositorio en
 * http://
 * 
 * Este codigo está licenciado bajo ...
*/


#include <DHT11.h>
#include "red.h"

//variables geográficas
char *lugar = "AREA_RECON";

/*
 *Definición de pins y variables constantes
 */
#define DELAY DHT11_RETRY_DELAY //delay comun
#define DHTPIN D2  //DHT 
#define LED_DUST D3 // dust sensor led
#define MED_DUST A0 //dust sensor measure

#define samplingTime 280 //dust_sensor
#define deltaTime 40 //dust_sensor
#define sleepTime 9680 //dust_sensor


struct dht_med{
  float tem;
  float hum;
};
/*
 * Definición de clases y estructuras
 */
DHT11 dht11(DHTPIN); 
WiFiClient espClient;
PubSubClient client(espClient);

/*
 * Definición de variables
 */

long lastMsg = 0;
char msg[50];
int value = 0;

//topico : "AREA_RECON/DHT22/HUM/"
char *topico = "";



void setup() {
  Serial.begin(115200);
  setup_wifi();
  client.setServer(mqtt_server, 1883);
  client.setCallback(callback);
  pinMode(LED_DUST, OUTPUT);
  pinMode(DHTPIN, INPUT);
  //dht.begin();

}


void setup_wifi() {

  delay(10);
  // We start by connecting to a WiFi network
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}




void callback(char* topic, byte* payload, unsigned int length) {
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i = 0; i < length; i++) {
    Serial.print((char)payload[i]);
  }
  Serial.println();
}


void reconnect() {
  // Loop until we're reconnected
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    // Attempt to connect
    if (client.connect("ESP8266Client")) {
      Serial.println("connected");
      // Once connected, publish an announcement...
      client.publish("outTopic", "hello world");
      // ... and resubscribe
      client.subscribe("inTopic");
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      // Wait 5 seconds before retrying
      delay(5000);
    }
  }
}



float dust_sensor(){

  float dustDensity;

  //medicion
  digitalWrite(LED_DUST,LOW); 
  delayMicroseconds(samplingTime);
  float voMeasured = analogRead(MED_DUST); 
  delayMicroseconds(deltaTime);
  digitalWrite(LED_DUST,HIGH); // turn the LED off
  delayMicroseconds(sleepTime);
  float calcVoltage = voMeasured * (3.3 / 1024);
  float dust = 0.17 * calcVoltage - 0.1;
  //fin medicion
  
  Serial.print(dust);
  
  
  return dust;
}


dht_med dht_sensor(){

  dht_med measure;
  int err;
  float temp;
  float hum;
  if((err=dht11.read(hum, temp))==0)
  {  
    measure.hum = hum;
    measure.tem = temp;
  }
  else
  {
    Serial.println();
    Serial.print("Error No :");
    Serial.print(err);
    Serial.println();    
  }
  return measure;
}



void pub(char *topico, char *msg){
  
  Serial.print("Publish message: ");
  Serial.print(topico);
  Serial.print(":");
  Serial.println(msg);
  client.publish(topico, msg);

}

void loop() {

  if (!client.connected()) {
    reconnect();
  }
  client.loop();
  //long now = millis(); 
  //if (now - lastMsg > 2000) {
    //lastMsg = now;
    //++value;
    char DUS_measure[6]= "";
    char TEM_measure[6]= "";
    char HUM_measure[6]= "";
    //tempHum dht_measure = dht_sensor();
    float dust_med = dust_sensor();
    dht_med measure = dht_sensor();
    float tem_med = measure.hum;
    float hum_med = measure.tem;
    Serial.println(".......................");
    Serial.print("dust:");
    Serial.println(dust_med);
    Serial.print("temp:");
    Serial.println(tem_med);
    Serial.print("hum:");
    Serial.println(hum_med);
    Serial.println(".......................");
    
    sprintf(DUS_measure, "%.02f", dust_med); //convertir a char*
    sprintf(TEM_measure, "%.02f", tem_med); //convertir a char*
    sprintf(HUM_measure, "%.02f", hum_med); //convertir a char*
    pub("AREA_RECON/DUST_SENSOR/DUS", DUS_measure);
    pub("AREA_RECON/DHT22/TEM", TEM_measure);
    pub("AREA_RECON/DHT22/HUM", HUM_measure);

  //}
  delay(5000);
}
