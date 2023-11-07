# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Darbojamies Tikai componens mapē
Lai pievienotu savam komponentam stilu components mapē
izveido failu ar sava component vārdu un .module.css pieērs (`BaseInfo.module.css`)
un savā component to importējiet pašā augšā pimērs `import styles from './BaseInfo.module.css';`.
Lai izmantotu klases nošī css faila tad class="" vietā jāraksta `className="styles."` un aiz punkta klase kuru tu gribi piešķirt.