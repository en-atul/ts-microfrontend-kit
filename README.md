# Module Federation Webpack Kit

A boilerplate setup for **Module Federation** using **Webpack**, designed for building **micro-frontend** architectures. This kit comes with configurations for both **host** and **remote** applications to help you quickly get started with sharing modules dynamically between different React applications.

## 🚀 Features

- **Webpack 5** Module Federation Setup: Easily configure and manage micro-frontends.
- **React & TypeScript**: Full integration with React and TypeScript, including type definitions for modules.
- **Hot Module Replacement (HMR)**: Integrated with React Fast Refresh for a smooth development experience.
- **Multiple Apps**: Easily switch between different configurations for both **host** and **remote** apps.
- **Production-Ready**: Optimized for production builds with features like code splitting, minification, and more.

---

## 🛠️ Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v20 or later)

---

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/module-federation-webpack-kit.git
cd module-federation-webpack-kit
```

2. **Install dependencies**

```bash
npm install
# or
pnpm install
```

---

## ⚡️ Development

This kit has a **host** and a **remote** application with pre-configured **Module Federation** settings. You can run both applications concurrently to see the dynamic sharing of modules.

### 1. **Run the Host Application**

The **host** application will serve as the main app that consumes modules exposed by the **remote** app.

```bash
npm run start:host
# or
pnpm start:host
```

This will run the **host** application on [http://localhost:3000](http://localhost:3000).

### 2. **Run the Remote Application**

The **remote** application exposes React components that can be consumed by the **host** application.

```bash
npm run start:remote
# or
pnpm start:remote
```

This will run the **remote** application on [http://localhost:3001](http://localhost:3001).

---

## 🔧 Webpack Configuration

### `webpack.common.ts`

Contains common configurations shared between **host** and **remote** applications.

### `webpack.dev.ts`

Development-specific configurations. This includes the **Module Federation** setup, React Fast Refresh, and HMR for a smooth development experience.

### `webpack.prod.ts`

Production-specific configurations, including optimizations like code splitting, tree shaking, and production-level minification.

### `ModuleFederationPlugin`

The **ModuleFederationPlugin** is used in both the **host** and **remote** applications. Below is an example of how it is used to expose and consume modules.

**Remote Application**:

```ts
new ModuleFederationPlugin({
  name: 'remoteApp',
  exposes: {
    './RemoteComponent': './src/components/RemoteComponent',
  },
  shared: {
    react: { singleton: true, eager: true, requiredVersion: deps.react },
    'react-dom': { singleton: true, eager: true, requiredVersion: deps['react-dom'] },
  },
}),
```

**Host Application**:

```ts
const RemoteComponent = React.lazy(() => import("remoteApp/RemoteComponent"));
```

---

## 🔨 Build for Production

You can build both the **host** and **remote** applications for production using the following commands:

### Build Host Application:

```bash
npm run build:host
# or
pnpm build:host
```

### Build Remote Application:

```bash
npm run build:remote
# or
pnpm build:remote
```

This will generate production-ready bundles inside the `dist` directory.

---

## 🧩 How It Works

### Module Federation

Module Federation allows you to **expose** and **consume** modules across different applications without needing to rely on a centralized monolith. This enables true micro-frontend architecture, where each app can evolve independently.

- **Exposing Modules**: In the remote application, you expose components using the `exposes` property of the `ModuleFederationPlugin`.
- **Consuming Modules**: In the host application, you dynamically import the exposed modules using `React.lazy()`.

For example, the **remote** app might expose a component like `RemoteComponent`:

```ts
exposes: {
  './RemoteComponent': './src/components/RemoteComponent',
}
```

The **host** app can then consume this component as follows:

```ts
const RemoteComponent = React.lazy(() => import("remoteApp/RemoteComponent"));
```

---

## 🌱 Development Workflow

1. **Start Host**: Run the host application to see how it consumes remote modules.
2. **Start Remote**: Run the remote application and make sure it exposes components that the host can dynamically import.
3. **Add New Exposes**: To add more modules to the remote application, simply add them to the `exposes` object in the `ModuleFederationPlugin` configuration.
4. **Add New Consumers**: In the host application, add `React.lazy()` imports for new exposed components.

---

<!-- ## 📝 Contributing

We welcome contributions to this repository. If you'd like to contribute, follow these steps:

1. Fork the repository.
2. Clone your fork to your local machine.
3. Create a new branch for your feature/fix.
4. Make your changes and run the tests.
5. Submit a pull request.

--- -->
