#include <ESP8266WiFi.h>
#include <PubSubClient.h>

const char ssid[] = "Speedy-D6B7C0";
const char pass[] = "3325142001";
const char server[] = "192.168.1.39";
const int  port = 1883;

WiFiClient espClient;
PubSubClient client(espClient);


void setup()
{
  Serial.begin(115200);
  Serial.println();

  WiFi.begin(ssid, pass);
  if (client.connect("arduinoClient")) {
    client.publish("debug","hello world");
    //client.subscribe("inTopic");
  }

  Serial.print("Connecting");
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }
  Serial.println();

  Serial.print("Connected, IP address: ");
  Serial.println(WiFi.localIP());


}

void loop() {
  //
  client.loop();
  }
