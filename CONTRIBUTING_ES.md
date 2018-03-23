# ¡Quiero contribuir a ETER!

:sparkles: :tada: Antes que nada... Gracias por tus ganas y tu tiempo :D :tada: :sparkling_heart:

Ésta es una guía para que puedas encontrar la mejor manera de contruibuir a que [ETER](github.com/rlyehlab/eter) siga creciendo.

#### Contenidos

¿Leíste nuestro [Código de Conducta](#código-de-conducta)?

[Quiero hacer una pregunta](#quiero-hacer-una-pregunta)

[¿Cómo puedo colaborar?](#cómo-puedo-colaborar)
  * [Chequeando nuestra lista de tareas pendientes](#tareas-pendientes)
  * [Tareas para empezar](#tareas-para-empezar)
  * [Sugiriendo mejoras](#suggesting-enhancements)

## Código de conducta

Este proyecto y todas las que lo hacemos nos compremetemos a cumplir con el [Código de Conducta](CODE_OF_CONDUCT_ES.md). Al colaborar, esperamos también que lo cumplas. Para reportar cualquier comportamiento inaceptable, escribinos a [contacto@rlab.be](mailto:contacto@rlab.be).

## Quiero hacer una pregunta

Si tenés una pregunta, la mejor manera de contactarnos es por mail a [contacto@rlab.be](mailto:contacto@rlab.be).

## ¿Cómo puedo colaborar?

### Tareas pendientes

Para empezar, está bueno entender cómo vamos desarrollando ETER. Para eso podés chequear nuestra [Hoja de Ruta](ROADMAP_ES,md).

En la hoja de ruta vas a ver que ETER está organizado en cuatro "sub-proyectos":

* [Construcción dispositivo monitor de aire](https://github.com/rlyehlab/eter/projects/4)
* [Desarrollo de un juego](https://github.com/rlyehlab/eter/projects/3)
* [Trabajo con la comunidad](https://github.com/rlyehlab/eter/projects/2)
* [General y Documentación](https://github.com/rlyehlab/eter/projects/5)

Cada subproyecto contiene las tareas (o *issues*) categorizadas en:

* To-do ó Pendientes
* In-progress ó En Curso
* Done ó Hechas

Entonces, podés ver qué tareas aún están pendientes, de dos formas:

* Entrando al sub-proyecto que más te interese y eligiendo alguna de la categoría "To Do"
* Entrando a la lista general de [*issues*](https://github.com/rlyehlab/eter/issues) y eligiendo alguna tarea que figure allí (en esa lista sólo figuran las To-Do y las In-progress)

Hay mil cosas para hacer, y seguramente podés ayudarnos con alguna :smile:

### Tareas para empezar

Si es tu primera vez colaborando con un proyecto te recomendamos encontrar alguna tarea fácil y concreta.

Para ello, en la lista general de [*issues*](https://github.com/rlyehlab/eter/issues) buscá las tareas que tengan la etiqueta 'HELP'



### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for Atom, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion :pencil: and find related suggestions :mag_right:.

Before creating enhancement suggestions, please check [this list](#before-submitting-an-enhancement-suggestion) as you might find out that you don't need to create one. When you are creating an enhancement suggestion, please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion). Fill in [the template](ISSUE_TEMPLATE.md), including the steps that you imagine you would take if the feature you're requesting existed.

#### Before Submitting An Enhancement Suggestion

* **Check the [debugging guide](https://flight-manual.atom.io/hacking-atom/sections/debugging/)** for tips — you might discover that the enhancement is already available. Most importantly, check if you're using [the latest version of Atom](https://flight-manual.atom.io/hacking-atom/sections/debugging/#update-to-the-latest-version) and if you can get the desired behavior by changing [Atom's or packages' config settings](https://flight-manual.atom.io/hacking-atom/sections/debugging/#check-atom-and-package-settings).
* **Check if there's already [a package](https://atom.io/packages) which provides that enhancement.**
* **Determine [which repository the enhancement should be suggested in](#atom-and-packages).**
* **Perform a [cursory search](https://github.com/search?q=+is%3Aissue+user%3Aatom)** to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined [which repository](#atom-and-packages) your enhancement suggestion is related to, create an issue on that repository and provide the following information:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part of Atom which the suggestion is related to. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
* **Explain why this enhancement would be useful** to most Atom users and isn't something that can or should be implemented as a [community package](#atom-and-packages).
* **List some other text editors or applications where this enhancement exists.**
* **Specify which version of Atom you're using.** You can get the exact version by running `atom -v` in your terminal, or by starting Atom and running the `Application: About` command from the [Command Palette](https://github.com/atom/command-palette).
* **Specify the name and version of the OS you're using.**




### Pull Requests

* Fill in [the required template](PULL_REQUEST_TEMPLATE.md)
* Do not include issue numbers in the PR title
* Include screenshots and animated GIFs in your pull request whenever possible.
* Follow the [JavaScript](#javascript-styleguide) and [CoffeeScript](#coffeescript-styleguide) styleguides.
* Include thoughtfully-worded, well-structured [Jasmine](https://jasmine.github.io/) specs in the `./spec` folder. Run them using `atom --test spec`. See the [Specs Styleguide](#specs-styleguide) below.
* Document new code based on the [Documentation Styleguide](#documentation-styleguide)
* End all files with a newline
* [Avoid platform-dependent code](https://flight-manual.atom.io/hacking-atom/sections/cross-platform-compatibility/)
* Place requires in the following order:
    * Built in Node Modules (such as `path`)
    * Built in Atom and Electron Modules (such as `atom`, `remote`)
    * Local Modules (using relative paths)
* Place class properties in the following order:
    * Class methods and properties (methods starting with a `@` in CoffeeScript or `static` in JavaScript)
    * Instance methods and properties
