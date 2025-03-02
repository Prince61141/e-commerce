# My React App

This project is a simple React application that showcases a product card component. Each card displays a photo, description, price, and options for purchasing the product.

## Project Structure

```
my-react-app
├── src
│   ├── components
│   │   ├── Card.tsx
│   │   ├── Photo.tsx
│   │   ├── Description.tsx
│   │   ├── Price.tsx
│   │   └── Options.tsx
│   ├── App.tsx
│   └── index.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## Components

- **Card**: Combines the `Photo`, `Description`, `Price`, and `Options` components to display a product card.
- **Photo**: Displays the product photo.
- **Description**: Shows the product description.
- **Price**: Displays the product price.
- **Options**: Provides buttons for "Buy Now" and "Pay on EMI".

## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd my-react-app
npm install
```

## Usage

To run the application, use the following command:

```bash
npm start
```

This will start the development server and open the application in your default web browser.

## License

This project is licensed under the MIT License.