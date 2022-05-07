"use strict";(self.webpackChunkreact_edit_list=self.webpackChunkreact_edit_list||[]).push([[344],{4344:(e,a,n)=>{n.r(a),n.d(a,{default:()=>t});const t="import * as React from 'react';\nimport ReactEditList, * as REL from 'react-edit-list';\n\nimport 'bootstrap/dist/css/bootstrap.min.css';\nimport '../example.css';\n\nconst schema: REL.Schema = [\n    {name: 'id', type: 'id'},\n    {name: 'product', type: 'string'},\n    {\n        name: 'type',\n        type: [\n            {value: '1', name: 'capex'},\n            {value: '2', name: 'consumable'}\n        ]\n    },\n    {name: 'price', type: 'number'},\n    {name: 'stock', type: 'number'}\n];\n\nconst data: REL.Row[] = [];\nfor (let i = 0; i < 9995; i++) {\n    data.push({\n        id: i,\n        product: `Product #${i}`,\n        type: Math.round(Math.random() + 1),\n        price: Math.round(Math.random() * 100),\n        stock: Math.round(Math.random() * 500)\n    });\n}\n\nconst perPage = 20;\n\nexport default function Simple() {\n    const ref = React.useRef<HTMLElement>();\n    const [page, setPage] = React.useState<number>(0);\n\n    // useCallback will generate a new onLoad function\n    // every time the page changes\n    const onLoad = React.useCallback(\n        () => data.slice(page * perPage, (page + 1) * perPage),\n        [page]\n    );\n\n    const totalPages = Math.ceil(data.length / perPage);\n\n    return (\n        <div>\n            {/* This is standard Bootstrap pagination */}\n            <nav>\n                <ul className='pagination user-select-none'>\n                    <li className='page-item'>\n                        <a className='page-link' onClick={() => setPage(0)}>\n                            First\n                        </a>\n                    </li>\n                    <li className={'page-item' + (page > 0 ? '' : ' disabled')}>\n                        <a className='page-link' onClick={() => setPage(page - 1)}>\n                            Previous\n                        </a>\n                    </li>\n                    <li className={'page-item' + (page > 0 ? '' : ' disabled')}>\n                        <a className='btn-width page-link' onClick={() => setPage(page - 1)}>\n                            {page > 0 ? page : <React.Fragment>&nbsp;</React.Fragment>}\n                        </a>\n                    </li>\n                    <li className='page-item active'>\n                        <a className='btn-width page-link active'>{page + 1}</a>\n                    </li>\n                    <li className={'page-item' + (page < totalPages - 1 ? '' : ' disabled')}>\n                        <a className='btn-width page-link' onClick={() => setPage(page + 1)}>\n                            {page + 2 < totalPages ? (\n                                page + 2\n                            ) : (\n                                <React.Fragment>&nbsp;</React.Fragment>\n                            )}\n                        </a>\n                    </li>\n                    <li className={'page-item' + (page < totalPages - 1 ? '' : ' disabled')}>\n                        <a className='page-link' onClick={() => setPage(page + 1)}>\n                            Next\n                        </a>\n                    </li>\n                    <li className='page-item'>\n                        <a className='page-link' onClick={() => setPage(totalPages - 1)}>\n                            Last\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n            <ReactEditList\n                ref={ref}\n                schema={schema}\n                // Every time this function changes, React will trigger an update\n                onLoad={onLoad}\n                onDelete={(item) => {\n                    if (!confirm('Are you sure you want to delete it?')) return false;\n                }}\n                onChange={(items) => {\n                    // Here you should call your API\n                    data.splice(page * perPage, perPage, ...items);\n\n                    // Force a reload\n                    return true;\n                }}\n                className='table table-light table-fixed align-middle'\n                headClassName='table-primary'\n                inputClassName='w-100'\n                thClassName={{\n                    // These allow to fix the column widths\n                    product: 'col-4',\n                    type: 'col-3',\n                    price: 'col-2',\n                    stock: 'col-2',\n                    buttons: 'col-1'\n                }}\n                btnValidateClassName='btn btn-success p-0 m-0'\n                btnDeleteClassName='btn btn-danger py-0 px-1 m-0 mx-1'\n                btnCancelClassName='btn btn-secondary py-0 px-1 m-0 mx-1'\n                // Adding is allowed only on the last page\n                disableInsert={page != totalPages - 1}\n            />\n        </div>\n    );\n}\n"}}]);