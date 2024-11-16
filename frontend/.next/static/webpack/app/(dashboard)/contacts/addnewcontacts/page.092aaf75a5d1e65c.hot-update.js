"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(dashboard)/contacts/addnewcontacts/page",{

/***/ "(app-pages-browser)/./app/(dashboard)/contacts/addnewcontacts/page.tsx":
/*!**********************************************************!*\
  !*** ./app/(dashboard)/contacts/addnewcontacts/page.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_Button_Grid_Paper_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Grid,Paper,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Grid_Paper_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Grid,Paper,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Grid_Paper_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Grid,Paper,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Paper/Paper.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Grid_Paper_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Grid,Paper,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Grid_Paper_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Grid,Paper,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Grid_Paper_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Grid,Paper,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst addnewcontact = ()=>{\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        firstName: \"\",\n        lastName: \"\",\n        email: \"\",\n        phone: \"\",\n        company: \"\",\n        jobTitle: \"\"\n    });\n    const handleInputChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    };\n    const handleFormSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await fetch(\"${API_URL}/contacts/\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(formData)\n            });\n            const data = await response.json();\n            if (response.ok) {\n                console.log(\"Contact added:\", data);\n                // Reset the form\n                setFormData({\n                    firstName: \"\",\n                    lastName: \"\",\n                    email: \"\",\n                    phone: \"\",\n                    company: \"\",\n                    jobTitle: \"\"\n                });\n                window.location.href = \"/contacts\";\n            } else {\n                console.error(\"Error:\", data.error);\n            }\n        } catch (error) {\n            console.error(\"Network error:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_Paper_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        p: 3,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_Paper_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                variant: \"h4\",\n                gutterBottom: true,\n                children: \"Contact Management\"\n            }, void 0, false, {\n                fileName: \"/home/sheik/CRM/frontend/app/(dashboard)/contacts/addnewcontacts/page.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_Paper_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                elevation: 3,\n                sx: {\n                    p: 3,\n                    mb: 4\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_Paper_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        variant: \"h6\",\n                        gutterBottom: true,\n                        children: \"Add New Contact\"\n                    }, void 0, false, {\n                        fileName: \"/home/sheik/CRM/frontend/app/(dashboard)/contacts/addnewcontacts/page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleFormSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_Paper_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                container: true,\n                                spacing: 2,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_Paper_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        item: true,\n                                        xs: 12,\n                                        sm: 6,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_Paper_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            label: \"First Name\",\n                                            name: \"firstName\",\n                                            value: formData.firstName,\n                                            onChange: handleInputChange,\n                                            fullWidth: true,\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"/home/sheik/CRM/frontend/app/(dashboard)/contacts/addnewcontacts/page.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/sheik/CRM/frontend/app/(dashboard)/contacts/addnewcontacts/page.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_Paper_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        item: true,\n                                        xs: 12,\n                                        sm: 6,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_Paper_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            label: \"Last Name\",\n                                            name: \"lastName\",\n                                            value: formData.lastName,\n                                            onChange: handleInputChange,\n                                            fullWidth: true,\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"/home/sheik/CRM/frontend/app/(dashboard)/contacts/addnewcontacts/page.tsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/sheik/CRM/frontend/app/(dashboard)/contacts/addnewcontacts/page.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_Paper_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        item: true,\n                                        xs: 12,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_Paper_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            label: \"Email\",\n                                            name: \"email\",\n                                            value: formData.email,\n                                            onChange: handleInputChange,\n                                            fullWidth: true,\n                                            required: true,\n                                            type: \"email\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/sheik/CRM/frontend/app/(dashboard)/contacts/addnewcontacts/page.tsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/sheik/CRM/frontend/app/(dashboard)/contacts/addnewcontacts/page.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_Paper_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        item: true,\n                                        xs: 12,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_Paper_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            label: \"Phone\",\n                                            name: \"phone\",\n                                            value: formData.phone,\n                                            onChange: handleInputChange,\n                                            fullWidth: true,\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"/home/sheik/CRM/frontend/app/(dashboard)/contacts/addnewcontacts/page.tsx\",\n                                            lineNumber: 101,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/sheik/CRM/frontend/app/(dashboard)/contacts/addnewcontacts/page.tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_Paper_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        item: true,\n                                        xs: 12,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_Paper_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            label: \"Company\",\n                                            name: \"company\",\n                                            value: formData.company,\n                                            onChange: handleInputChange,\n                                            fullWidth: true\n                                        }, void 0, false, {\n                                            fileName: \"/home/sheik/CRM/frontend/app/(dashboard)/contacts/addnewcontacts/page.tsx\",\n                                            lineNumber: 111,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/sheik/CRM/frontend/app/(dashboard)/contacts/addnewcontacts/page.tsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_Paper_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        item: true,\n                                        xs: 12,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_Paper_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            label: \"Job Title\",\n                                            name: \"jobTitle\",\n                                            value: formData.jobTitle,\n                                            onChange: handleInputChange,\n                                            fullWidth: true\n                                        }, void 0, false, {\n                                            fileName: \"/home/sheik/CRM/frontend/app/(dashboard)/contacts/addnewcontacts/page.tsx\",\n                                            lineNumber: 120,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/sheik/CRM/frontend/app/(dashboard)/contacts/addnewcontacts/page.tsx\",\n                                        lineNumber: 119,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sheik/CRM/frontend/app/(dashboard)/contacts/addnewcontacts/page.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_Paper_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                type: \"submit\",\n                                variant: \"contained\",\n                                sx: {\n                                    mt: 3\n                                },\n                                onClick: handleFormSubmit,\n                                children: \"Add Contact\"\n                            }, void 0, false, {\n                                fileName: \"/home/sheik/CRM/frontend/app/(dashboard)/contacts/addnewcontacts/page.tsx\",\n                                lineNumber: 129,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/sheik/CRM/frontend/app/(dashboard)/contacts/addnewcontacts/page.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/sheik/CRM/frontend/app/(dashboard)/contacts/addnewcontacts/page.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/sheik/CRM/frontend/app/(dashboard)/contacts/addnewcontacts/page.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, undefined);\n};\n_s(addnewcontact, \"gjSNPRzgdfi2X0ht01xNX/bQ2k0=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (addnewcontact);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oZGFzaGJvYXJkKS9jb250YWN0cy9hZGRuZXdjb250YWN0cy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDd0M7QUFRakI7QUFFdkIsTUFBTVEsZ0JBQWdCOztJQUNwQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUM7UUFDdkNVLFdBQVc7UUFDWEMsVUFBVTtRQUNWQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsU0FBUztRQUNUQyxVQUFVO0lBQ1o7SUFHQSxNQUFNQyxvQkFBb0IsQ0FBQ0M7UUFDekIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHRixFQUFFRyxNQUFNO1FBQ2hDWCxZQUFZO1lBQUUsR0FBR0QsUUFBUTtZQUFFLENBQUNVLEtBQUssRUFBRUM7UUFBTTtJQUMzQztJQUVBLE1BQU1FLG1CQUFtQixPQUFPSjtRQUM5QkEsRUFBRUssY0FBYztRQUNoQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLHdCQUF3QjtnQkFDbkRDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQUUsZ0JBQWdCO2dCQUFtQjtnQkFDOUNDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ3JCO1lBQ3ZCO1lBQ0EsTUFBTXNCLE9BQU8sTUFBTVAsU0FBU1EsSUFBSTtZQUNoQyxJQUFJUixTQUFTUyxFQUFFLEVBQUU7Z0JBQ2ZDLFFBQVFDLEdBQUcsQ0FBQyxrQkFBa0JKO2dCQUM5QixpQkFBaUI7Z0JBQ2pCckIsWUFBWTtvQkFDVkMsV0FBVztvQkFDWEMsVUFBVTtvQkFDVkMsT0FBTztvQkFDUEMsT0FBTztvQkFDUEMsU0FBUztvQkFDVEMsVUFBVTtnQkFDWjtnQkFDQW9CLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHO1lBQ3pCLE9BQU87Z0JBQ0xKLFFBQVFLLEtBQUssQ0FBQyxVQUFVUixLQUFLUSxLQUFLO1lBQ3BDO1FBQ0YsRUFBRSxPQUFPQSxPQUFPO1lBQ2RMLFFBQVFLLEtBQUssQ0FBQyxrQkFBa0JBO1FBQ2xDO0lBQ0Y7SUFHQSxxQkFDRSw4REFBQ3JDLHNIQUFHQTtRQUFDc0MsR0FBRzs7MEJBQ04sOERBQUNqQyxzSEFBVUE7Z0JBQUNrQyxTQUFRO2dCQUFLQyxZQUFZOzBCQUFDOzs7Ozs7MEJBR3RDLDhEQUFDckMsc0hBQUtBO2dCQUFDc0MsV0FBVztnQkFBR0MsSUFBSTtvQkFBRUosR0FBRztvQkFBR0ssSUFBSTtnQkFBRTs7a0NBQ3JDLDhEQUFDdEMsc0hBQVVBO3dCQUFDa0MsU0FBUTt3QkFBS0MsWUFBWTtrQ0FBQzs7Ozs7O2tDQUd0Qyw4REFBQ0k7d0JBQUtDLFVBQVV6Qjs7MENBQ2QsOERBQUNsQixzSEFBSUE7Z0NBQUM0QyxTQUFTO2dDQUFDQyxTQUFTOztrREFDdkIsOERBQUM3QyxzSEFBSUE7d0NBQUM4QyxJQUFJO3dDQUFDQyxJQUFJO3dDQUFJQyxJQUFJO2tEQUNyQiw0RUFBQzlDLHNIQUFTQTs0Q0FDUitDLE9BQU07NENBQ05sQyxNQUFLOzRDQUNMQyxPQUFPWCxTQUFTRSxTQUFTOzRDQUN6QjJDLFVBQVVyQzs0Q0FDVnNDLFNBQVM7NENBQ1RDLFFBQVE7Ozs7Ozs7Ozs7O2tEQUdaLDhEQUFDcEQsc0hBQUlBO3dDQUFDOEMsSUFBSTt3Q0FBQ0MsSUFBSTt3Q0FBSUMsSUFBSTtrREFDckIsNEVBQUM5QyxzSEFBU0E7NENBQ1IrQyxPQUFNOzRDQUNObEMsTUFBSzs0Q0FDTEMsT0FBT1gsU0FBU0csUUFBUTs0Q0FDeEIwQyxVQUFVckM7NENBQ1ZzQyxTQUFTOzRDQUNUQyxRQUFROzs7Ozs7Ozs7OztrREFHWiw4REFBQ3BELHNIQUFJQTt3Q0FBQzhDLElBQUk7d0NBQUNDLElBQUk7a0RBQ2IsNEVBQUM3QyxzSEFBU0E7NENBQ1IrQyxPQUFNOzRDQUNObEMsTUFBSzs0Q0FDTEMsT0FBT1gsU0FBU0ksS0FBSzs0Q0FDckJ5QyxVQUFVckM7NENBQ1ZzQyxTQUFTOzRDQUNUQyxRQUFROzRDQUNSQyxNQUFLOzs7Ozs7Ozs7OztrREFHVCw4REFBQ3JELHNIQUFJQTt3Q0FBQzhDLElBQUk7d0NBQUNDLElBQUk7a0RBQ2IsNEVBQUM3QyxzSEFBU0E7NENBQ1IrQyxPQUFNOzRDQUNObEMsTUFBSzs0Q0FDTEMsT0FBT1gsU0FBU0ssS0FBSzs0Q0FDckJ3QyxVQUFVckM7NENBQ1ZzQyxTQUFTOzRDQUNUQyxRQUFROzs7Ozs7Ozs7OztrREFHWiw4REFBQ3BELHNIQUFJQTt3Q0FBQzhDLElBQUk7d0NBQUNDLElBQUk7a0RBQ2IsNEVBQUM3QyxzSEFBU0E7NENBQ1IrQyxPQUFNOzRDQUNObEMsTUFBSzs0Q0FDTEMsT0FBT1gsU0FBU00sT0FBTzs0Q0FDdkJ1QyxVQUFVckM7NENBQ1ZzQyxTQUFTOzs7Ozs7Ozs7OztrREFHYiw4REFBQ25ELHNIQUFJQTt3Q0FBQzhDLElBQUk7d0NBQUNDLElBQUk7a0RBQ2IsNEVBQUM3QyxzSEFBU0E7NENBQ1IrQyxPQUFNOzRDQUNObEMsTUFBSzs0Q0FDTEMsT0FBT1gsU0FBU08sUUFBUTs0Q0FDeEJzQyxVQUFVckM7NENBQ1ZzQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FJZiw4REFBQ3BELHNIQUFNQTtnQ0FBQ3NELE1BQUs7Z0NBQVNoQixTQUFRO2dDQUFZRyxJQUFJO29DQUFFYyxJQUFJO2dDQUFFO2dDQUFHQyxTQUFTckM7MENBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPOUY7R0E1SE1kO0FBOEhOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8oZGFzaGJvYXJkKS9jb250YWN0cy9hZGRuZXdjb250YWN0cy9wYWdlLnRzeD83ZDI2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIEdyaWQsXG4gIFBhcGVyLFxuICBUZXh0RmllbGQsXG4gIFR5cG9ncmFwaHksXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5cbmNvbnN0IGFkZG5ld2NvbnRhY3QgPSAoKSA9PiB7XG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgIGZpcnN0TmFtZTogXCJcIixcbiAgICBsYXN0TmFtZTogXCJcIixcbiAgICBlbWFpbDogXCJcIixcbiAgICBwaG9uZTogXCJcIixcbiAgICBjb21wYW55OiBcIlwiLFxuICAgIGpvYlRpdGxlOiBcIlwiLFxuICB9KTtcbiAgXG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZTogeyB0YXJnZXQ6IHsgbmFtZTogYW55OyB2YWx1ZTogYW55OyB9OyB9KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgW25hbWVdOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gYXN5bmMgKGU6IHsgcHJldmVudERlZmF1bHQ6ICgpID0+IHZvaWQ7IH0pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIke0FQSV9VUkx9L2NvbnRhY3RzL1wiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29udGFjdCBhZGRlZDpcIiwgZGF0YSk7XG4gICAgICAgIC8vIFJlc2V0IHRoZSBmb3JtXG4gICAgICAgIHNldEZvcm1EYXRhKHtcbiAgICAgICAgICBmaXJzdE5hbWU6IFwiXCIsXG4gICAgICAgICAgbGFzdE5hbWU6IFwiXCIsXG4gICAgICAgICAgZW1haWw6IFwiXCIsXG4gICAgICAgICAgcGhvbmU6IFwiXCIsXG4gICAgICAgICAgY29tcGFueTogXCJcIixcbiAgICAgICAgICBqb2JUaXRsZTogXCJcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9jb250YWN0cyc7IFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBkYXRhLmVycm9yKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIk5ldHdvcmsgZXJyb3I6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG4gIFxuXG4gIHJldHVybiAoXG4gICAgPEJveCBwPXszfT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgQ29udGFjdCBNYW5hZ2VtZW50XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8UGFwZXIgZWxldmF0aW9uPXszfSBzeD17eyBwOiAzLCBtYjogNCB9fT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgIEFkZCBOZXcgQ29udGFjdFxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVGb3JtU3VibWl0fT5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJGaXJzdCBOYW1lXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZmlyc3ROYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5sYXN0TmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlBob25lXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGhvbmVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5waG9uZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29tcGFueVwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvbXBhbnlcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5jb21wYW55fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSm9iIFRpdGxlXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiam9iVGl0bGVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5qb2JUaXRsZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJjb250YWluZWRcIiBzeD17eyBtdDogMyB9fSBvbkNsaWNrPXtoYW5kbGVGb3JtU3VibWl0fT5cbiAgICAgICAgICAgIEFkZCBDb250YWN0XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvUGFwZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhZGRuZXdjb250YWN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCb3giLCJCdXR0b24iLCJHcmlkIiwiUGFwZXIiLCJUZXh0RmllbGQiLCJUeXBvZ3JhcGh5IiwiYWRkbmV3Y29udGFjdCIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicGhvbmUiLCJjb21wYW55Iiwiam9iVGl0bGUiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJoYW5kbGVGb3JtU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJvayIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJlcnJvciIsInAiLCJ2YXJpYW50IiwiZ3V0dGVyQm90dG9tIiwiZWxldmF0aW9uIiwic3giLCJtYiIsImZvcm0iLCJvblN1Ym1pdCIsImNvbnRhaW5lciIsInNwYWNpbmciLCJpdGVtIiwieHMiLCJzbSIsImxhYmVsIiwib25DaGFuZ2UiLCJmdWxsV2lkdGgiLCJyZXF1aXJlZCIsInR5cGUiLCJtdCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(dashboard)/contacts/addnewcontacts/page.tsx\n"));

/***/ })

});