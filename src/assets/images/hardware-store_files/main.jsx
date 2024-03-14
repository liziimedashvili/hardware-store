import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=a783d0de"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=a783d0de"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react;
import __vite__cjsImport2_reactDom from "/node_modules/.vite/deps/react-dom.js?v=a783d0de"; const ReactDOM = __vite__cjsImport2_reactDom.__esModule ? __vite__cjsImport2_reactDom.default : __vite__cjsImport2_reactDom;
import App from "/src/App.jsx?t=1710418221383";
import "/src/index.css?t=1710418221383";
import "/node_modules/react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "/node_modules/.vite/deps/react-toastify.js?v=a783d0de";
import { I18nextProvider } from "/node_modules/.vite/deps/react-i18next.js?v=a783d0de";
import i18next from "/node_modules/.vite/deps/i18next.js?v=a783d0de";
import global_en from "/src/locales/en/global.json?import";
import global_geo from "/src/locales/geo/global.json?import";
const selectedLanguage = localStorage.getItem("selectedLanguage") || "en";
i18next.init({
  interpolation: { escapeValue: false },
  lng: selectedLanguage,
  fallbackLng: "geo",
  resources: {
    en: {
      global: global_en
    },
    geo: {
      global: global_geo
    }
  }
});
ReactDOM.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxDEV(React.StrictMode, { children: /* @__PURE__ */ jsxDEV(I18nextProvider, { i18n: i18next, children: [
    /* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
      fileName: "C:/Users/Lizi Imedashvili/OneDrive/Рабочий стол/hardware-store/src/main.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(ToastContainer, {}, void 0, false, {
      fileName: "C:/Users/Lizi Imedashvili/OneDrive/Рабочий стол/hardware-store/src/main.jsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/Lizi Imedashvili/OneDrive/Рабочий стол/hardware-store/src/main.jsx",
    lineNumber: 30,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "C:/Users/Lizi Imedashvili/OneDrive/Рабочий стол/hardware-store/src/main.jsx",
    lineNumber: 29,
    columnNumber: 3
  }, this)
);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBOEJNO0FBOUJOLE9BQU9BLFdBQVc7QUFDbEIsT0FBT0MsY0FBYztBQUNyQixPQUFPQyxTQUFTO0FBQ2hCLE9BQU87QUFDUCxPQUFPO0FBQ1AsU0FBU0Msc0JBQXNCO0FBRS9CLFNBQVNDLHVCQUF1QjtBQUNoQyxPQUFPQyxhQUFhO0FBQ3BCLE9BQU9DLGVBQWU7QUFDdEIsT0FBT0MsZ0JBQWdCO0FBRXZCLE1BQU1DLG1CQUFtQkMsYUFBYUMsUUFBUSxrQkFBa0IsS0FBSztBQUNyRUwsUUFBUU0sS0FBSztBQUFBLEVBQ1hDLGVBQWUsRUFBRUMsYUFBYSxNQUFNO0FBQUEsRUFDcENDLEtBQUtOO0FBQUFBLEVBQ0xPLGFBQWE7QUFBQSxFQUNiQyxXQUFXO0FBQUEsSUFDVEMsSUFBSTtBQUFBLE1BQ0ZDLFFBQVFaO0FBQUFBLElBQ1Y7QUFBQSxJQUNBYSxLQUFLO0FBQUEsTUFDSEQsUUFBUVg7QUFBQUEsSUFDVjtBQUFBLEVBQ0Y7QUFDRixDQUFDO0FBRUROLFNBQVNtQixXQUFXQyxTQUFTQyxlQUFlLE1BQU0sQ0FBQyxFQUFFQztBQUFBQSxFQUNuRCx1QkFBQyxNQUFNLFlBQU4sRUFDQyxpQ0FBQyxtQkFBZ0IsTUFBTWxCLFNBQ3JCO0FBQUEsMkJBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUk7QUFBQSxJQUNKLHVCQUFDLG9CQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBZTtBQUFBLE9BRmpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FHQSxLQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FLQTtBQUNGIiwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsIkFwcCIsIlRvYXN0Q29udGFpbmVyIiwiSTE4bmV4dFByb3ZpZGVyIiwiaTE4bmV4dCIsImdsb2JhbF9lbiIsImdsb2JhbF9nZW8iLCJzZWxlY3RlZExhbmd1YWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImluaXQiLCJpbnRlcnBvbGF0aW9uIiwiZXNjYXBlVmFsdWUiLCJsbmciLCJmYWxsYmFja0xuZyIsInJlc291cmNlcyIsImVuIiwiZ2xvYmFsIiwiZ2VvIiwiY3JlYXRlUm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiXSwic291cmNlcyI6WyJtYWluLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHAuanN4XCI7XG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcblxuaW1wb3J0IHsgSTE4bmV4dFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcbmltcG9ydCBpMThuZXh0IGZyb20gXCJpMThuZXh0XCI7XG5pbXBvcnQgZ2xvYmFsX2VuIGZyb20gXCIuL2xvY2FsZXMvZW4vZ2xvYmFsLmpzb25cIjtcbmltcG9ydCBnbG9iYWxfZ2VvIGZyb20gXCIuL2xvY2FsZXMvZ2VvL2dsb2JhbC5qc29uXCI7XG5cbmNvbnN0IHNlbGVjdGVkTGFuZ3VhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNlbGVjdGVkTGFuZ3VhZ2VcIikgfHwgXCJlblwiO1xuaTE4bmV4dC5pbml0KHtcbiAgaW50ZXJwb2xhdGlvbjogeyBlc2NhcGVWYWx1ZTogZmFsc2UgfSxcbiAgbG5nOiBzZWxlY3RlZExhbmd1YWdlLFxuICBmYWxsYmFja0xuZzogXCJnZW9cIixcbiAgcmVzb3VyY2VzOiB7XG4gICAgZW46IHtcbiAgICAgIGdsb2JhbDogZ2xvYmFsX2VuLFxuICAgIH0sXG4gICAgZ2VvOiB7XG4gICAgICBnbG9iYWw6IGdsb2JhbF9nZW8sXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5SZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSkucmVuZGVyKFxuICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICA8STE4bmV4dFByb3ZpZGVyIGkxOG49e2kxOG5leHR9PlxuICAgICAgPEFwcCAvPlxuICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XG4gICAgPC9JMThuZXh0UHJvdmlkZXI+XG4gIDwvUmVhY3QuU3RyaWN0TW9kZT5cbik7XG4iXSwiZmlsZSI6IkM6L1VzZXJzL0xpemkgSW1lZGFzaHZpbGkvT25lRHJpdmUv0KDQsNCx0L7Rh9C40Lkg0YHRgtC+0LsvaGFyZHdhcmUtc3RvcmUvc3JjL21haW4uanN4In0=