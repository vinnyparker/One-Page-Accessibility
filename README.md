# One-Page Site with Accessibility

This is a single-page website project developed with Angular, Bootstrap, and SCSS, with a strong focus on implementing accessibility features.

## Project Overview

The main goal of this project is to demonstrate the construction of a modern and responsive website that incorporates essential accessibility features to ensure content is accessible to the widest possible range of users, including those with different needs.

### Implemented Accessibility Features

* **High Contrast Mode:** Allows the user to switch to a high-contrast mode (pure black/white/vibrant yellow) to improve readability for users with visual impairments. The colors were chosen to maximize contrast according to accessibility guidelines.
* **Font Size Adjustment:** Provides buttons to increase and decrease font size at multiple levels, allowing users to customize text readability. This is dynamically applied to all text elements on the site.
* **Sticky Header:** The header (which includes the accessibility toolbar and navigation menu) remains fixed at the top of the screen while scrolling, providing constant access to options and navigation.
* **Enhanced Visual Focus:** Interactive elements (buttons, links, inputs) receive a clear visual outline when focused (via keyboard or tabbing), improving navigation for users who do not use a mouse.

## Technologies Used

* **Angular CLI:** A command-line interface tool for initializing, developing, scaffolding, and maintaining Angular applications.
* **Angular:** A framework for building single-page web applications.
* **TypeScript:** A superset of JavaScript that adds static typing.
* **SCSS (Sass):** A CSS preprocessor that adds features like variables, nesting, and loops for more organized and dynamic CSS.
* **Bootstrap 5:** A popular CSS framework for rapid and responsive user interface development.

## How to Get Started

To run this project on your local machine, follow the steps below:

### Prerequisites

Ensure you have Node.js and Angular CLI globally installed on your machine.

* **Node.js:** Download and install the latest LTS version from [nodejs.org](https://nodejs.org/).
* **Angular CLI:** After installing Node.js, install Angular CLI via npm:
    ```bash
    npm install -g @angular/cli
    ```

### Installation

1.  **Clone the repository** (or unzip the project) to your local directory:
    ```bash
    git clone https://github.com/vinnyparker/One-Page-Accessibility
    # or navigate to the project directory if you already have it
    cd onepage-site
    ```
2.  **Install project dependencies**:
    ```bash
    npm install
    ```
    This will install all necessary libraries, including Angular and Bootstrap.

### Running the Development Server

1.  After installing dependencies, you can start the Angular development server:
    ```bash
    ng serve
    ```
2.  Open your browser and navigate to `http://localhost:4200/`. The application will automatically reload if you make any changes to the source files.

## Folder Structure and Key Files

* `src/app/`: Contains the main components of the application.
  * `app.component.ts`: Main logic for the root component, including handling accessibility classes (using `Renderer2` and `document.body.classList`).
  * `app.html`: HTML structure of the site, including the accessibility topbar, sticky header, and page sections.
  * `app.scss`: Component-specific styles for `AppComponent` (though most accessibility styles are in `styles.scss`).
* `src/styles.scss`: Global SCSS stylesheet. **Contains color definitions for high-contrast mode and multiple font size levels**, using `@for` loops to generate classes dynamically.
* `src/index.html`: The main HTML file that loads the Angular application.
* `angular.json`: Angular CLI configuration file, where `styles.scss` and Bootstrap files are configured for global loading.

## Accessibility Implementation Details

### CSS Class Control

The manipulation of accessibility classes (`high-contrast-mode`, `font-size-plus-X`, `font-size-minus-X`) is done directly on the document's `<body>` tag. This is achieved by using Angular's `Renderer2` and `document.body.classList` within `app.component.ts`.

### Persistent Storage

High-contrast settings and font zoom levels are stored in the browser's `localStorage`. This means user preferences are maintained even after closing and reopening the browser.

### Dynamic SCSS Styles

Font size classes (`font-size-plus-1` to `font-size-plus-10` and `font-size-minus-1` to `font-size-minus-10`) are programmatically generated in `styles.scss` using SCSS `@for` loops. This allows for easy scalability to add more or fewer font adjustment levels without repeating much CSS code. The universal selector `*` is used within these classes to ensure all text elements are affected, overriding default browser or Bootstrap styles.

### Z-Index for Fixed Content

To ensure the fixed header (containing the topbar and navbar) remains visible over the rest of the content when scrolling, `position: fixed` and a high `z-index` (`1030`) are used on the `.fixed-top-container` element. A corresponding `padding-top` is applied to the `body` to prevent page content from being hidden behind the fixed header.

## Contribution

Contributions are welcome! If you have suggestions to improve accessibility, code, or design, feel free to open an issue or submit a pull request.

**[Versão em Português do README](README-pt-br.md)**

## License

This project is licensed under the [MIT License](LICENSE).
