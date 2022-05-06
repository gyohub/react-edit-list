"use strict";(self.webpackChunkreact_edit_list=self.webpackChunkreact_edit_list||[]).push([[547],{4547:(n,e,t)=>{t.r(e),t.d(e,{default:()=>a});const a="import * as React from 'react';\nimport ReactEditList, * as REL from 'react-edit-list';\n\nimport 'bootstrap/dist/js/bootstrap.bundle';\nimport 'bootstrap/dist/css/bootstrap.min.css';\nimport '../example.css';\n\nimport {DayPicker as ReactDayPicker} from 'react-day-picker';\nimport {format, isValid} from 'date-fns';\nimport 'react-day-picker/dist/style.css';\n\nconst data = [\n    {name: 'Ronald', birthdate: new Date('1980-01-30')},\n    {name: 'Archibald', birthdate: new Date('1982-02-28')}\n];\nconst schema: REL.Schema = [\n    {name: 'name', type: 'string'},\n    {name: 'birthdate', type: 'custom'}\n];\n\n// Loading can be asynchronous\nconst getData = () => Promise.resolve(data);\n\nexport default function Dates() {\n    const validate = (item) => isValid(item.birthdate);\n    const display = (value) => (isValid(value) ? format(new Date(value), 'PP') : '');\n\n    return (\n        <ReactEditList\n            schema={schema}\n            onLoad={getData}\n            onInsert={validate}\n            onUpdate={validate}\n            format={{\n                birthdate: function BirthDateRenderer(props) {\n                    return <React.Fragment>{display(props.value)}</React.Fragment>;\n                }\n            }}\n            edit={{\n                // You have to provide a custom editor that is a React component\n                // react-edit-list will pass you the current value in `props.value`\n                // In order to modify it, you will have to call `props.onChange()`\n                birthdate: function BirthDateEditor(props) {\n                    const dropdown = React.useRef<HTMLDivElement>();\n                    return (\n                        // This is a simple Bootstrap 5 dropdown with manual control\n                        <div className='w-100'>\n                            {/* This is the always visible part */}\n                            <input\n                                value={display(props.value)}\n                                readOnly\n                                onFocus={React.useCallback(\n                                    // On focus, show the dropdown\n                                    () => dropdown.current.classList.add('show'),\n                                    [dropdown]\n                                )}\n                                className='user-select-none w-100'\n                            />\n                            {/* This is the dropdown part */}\n                            <div className='dropdown-menu' ref={dropdown}>\n                                <ReactDayPicker\n                                    mode='single'\n                                    selected={props.value as Date}\n                                    defaultMonth={props.value as Date}\n                                    onSelect={React.useCallback(\n                                        (value) => {\n                                            // Here we send the new date to react-edit-list\n                                            props.onChange(value);\n                                            // And then we close the dropdown\n                                            dropdown.current.classList.remove('show');\n                                        },\n                                        [props]\n                                    )}\n                                />\n                            </div>\n                        </div>\n                    );\n                }\n            }}\n            className='table table-light table-fixed align-middle'\n            headClassName='table-dark'\n            inputClassName='w-100'\n            thClassName={{\n                product: 'col-4',\n                type: 'col-3',\n                price: 'col-2',\n                stock: 'col-2',\n                buttons: 'col-1'\n            }}\n            btnValidateClassName='btn btn-success p-0 m-0'\n            btnDeleteClassName='btn btn-danger py-0 px-1 m-0 mx-1'\n            btnCancelClassName='btn btn-secondary py-0 px-1 m-0 mx-1'\n        />\n    );\n}\n"}}]);