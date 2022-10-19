import {saveAs} from "file-saver";
import ExcelJS from 'exceljs';
const alphabetList = [
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "Z"
];

export default async function skapaExcelArk(excelInfo) {
    const workbook = new ExcelJS.Workbook();

    workbook.creator = 'Lukas Mörtman';
    workbook.created = new Date();

    const sheet = workbook.addWorksheet(new Date().getFullYear().toString());
    sheet.columns = [
        {header: 'Datum', key: 'Datum'},
        {header: 'Namn', key: 'namn'},
        {header: 'Ver', key: 'ver'},
        {header: 'Kassa', key: 'kassaDebit'},
        {header: '', key: 'kassaKredit'},
        {header: 'Bank', key: 'bankDebit'},
        {header: '', key: 'bankKredit'},
        {header: 'Medlemsavgifter', key: 'medlemsavgifterDebit'},
        {header: '', key: 'medlemsavgifterKredit'},
        {header: 'Bidrag', key: 'bidragDebit'},
        {header: '', key: 'bidragKredit'},
        {header: 'Laborationer', key: 'laborationerDebit'},
        {header: '', key: 'laborationerKredit'},
        {header: 'Kök & fester', key: 'kökDebit'},
        {header: '', key: 'kökKredit'},
        {header: 'Försäljning', key: 'försäljningDebit'},
        {header: '', key: 'försäljningKredit'},
        {header: 'NF-artiklar', key: 'artiklarDebit'},
        {header: '', key: 'artiklarKredit'},
        {header: 'Skuld', key: 'skuldDebit'},
        {header: '', key: 'skuldKredit'},
        {header: 'Övrigt', key: 'övrigtDebit'},
        {header: '', key: 'övrigtKredit'},
        {header: 'Diverse konton', key: 'diverseDebit'},
        {header: '', key: 'diverseKredit'},
    ];
    const fixaborders = () => {
        for (let i = 0; i < 11; i++) {
            sheet.getColumn(`${alphabetList[(i * 2) + 2]}`).style = {
                border: {
                    left: {
                        style: "thin"
                    },
                },
            }
            sheet.getColumn(`${alphabetList[(i * 2) + 2]}`).eachCell(function (cell) {
                cell.style = {
                    border: {
                        left: {
                            style: "thin"
                        },
                    }
                };

            })
            sheet.getColumn(`${alphabetList[(i)]}`).eachCell(function (cell) {
                cell.alignment = {
                    horizontal: "left"
                }

            })
        }
        sheet.getColumnKey("Datum").style = {
            border: {
                right: {
                    style: "thin"
                },
            }
        }
        sheet.getColumnKey("namn").style = {
            border: {
                right: {
                    style: "medium"
                }
            }
        }
        sheet.getColumnKey("ver").style = {
            border: {
                right: {
                    style: "medium"
                },
                left: {
                    style: "medium"
                }
            }
        }
        sheet.getColumnKey("namn").eachCell(function (cell, rowNumber) {
            cell.style = {
                border: {
                    right: {
                        style: "medium"
                    },
                    left: {
                        style: "thin"
                    }
                }
            }
        });
        sheet.getColumn("D").style = {
            border: {
                left: {
                    style: "medium"
                }
            }
        }
        sheet.getColumn("D").eachCell(function (cell, rowNumber) {
            cell.style = {
                border: {
                    left: {
                        style: "medium"
                    }
                }
            }
        });
        sheet.getColumnKey("ver").eachCell(function (cell, rowNumber) {
            cell.style = {
                border: {
                    right: {
                        style: "medium"
                    },
                    left: {
                        style: "medium"
                    }
                }
            }
        });
    }
    const fixadatavisare = () => {
        sheet.getColumnKey("Datum").numFmt = "[$-x-sysdate]DDDD, MMMM DD, aaaa"
        sheet.getColumnKey("kassaKredit").numFmt = "###0k\\r;-###0k\\r"
        sheet.getColumnKey("laborationerDebit").numFmt = "###0k\\r;-###0k\\r"
        sheet.getColumnKey("kassaDebit").eachCell(function (cell, rowNumber) {
            cell.numFmt = "###0k\\r;-###0k\\r"
        });
        sheet.getColumnKey("övrigtDebit").numFmt = "###0k\\r;-###0k\\r"
        sheet.getColumnKey("kökDebit").numFmt = "###0k\\r;-###0k\\r"
        sheet.getColumnKey("medlemsavgifterKredit").numFmt = "###0k\\r;-###0k\\r"
        sheet.getColumnKey("försäljningKredit").numFmt = "###0k\\r;-###0k\\r"
        sheet.getColumnKey("artiklarKredit").numFmt = "###0k\\r;-###0k\\r"
        sheet.getCell("C1").style = {
            fill: {
                type: "pattern",
                pattern: "solid",
                fgColor: {argb: 'BDD7EE'},
                bgColor: {argb: 'BDD7EE'}
            },
            alignment: {horizontal: "center"}
        }
        sheet.getCell("A2").style = {
            border: {
                bottom: {
                    style: "thin"
                },
                right: {
                    style: "thin"
                }
            }
        }
        sheet.getCell("B2").style = {
            border: {
                bottom: {
                    style: "thin"
                }, right: {
                    style: "medium"
                },
                left: {
                    style: "thin"
                }
            }
        }
        sheet.getCell("C2").style = {
            border: {
                bottom: {
                    style: "thin"
                }, right: {
                    style: "medium"
                }
            },
            fill: {
                type: "pattern",
                pattern: "solid",
                fgColor: {argb: 'BDD7EE'},
                bgColor: {argb: 'BDD7EE'}
            },
            alignment: {horizontal: "center"}
        }
    }
    sheet.addRow({
        ver: "nr",
        kassaDebit: "Debit",
        kassaKredit: "Kredit",
        bankDebit: "Debit",
        bankKredit: "Kredit",
        medlemsavgifterDebit: "Debit",
        medlemsavgifterKredit: "Kredit",
        bidragDebit: "Debit",
        bidragKredit: "Kredit",
        laborationerDebit: "Debit",
        laborationerKredit: "Kredit",
        kökDebit: "Debit",
        kökKredit: "Kredit",
        försäljningDebit: "Debit",
        försäljningKredit: "Kredit",
        artiklarDebit: "Debit",
        artiklarKredit: "Kredit",
        skuldDebit: "Debit",
        skuldKredit: "Kredit",
        övrigtDebit: "Debit",
        övrigtKredit: "Kredit",
        diverseDebit: "Debit",
        diverseKredit: "Kredit"
    })
    let exceldata = excelInfo.sort((a, b) => new Date(a.Datum) - new Date(b.Datum));
    exceldata.forEach((item, i) => {
        let Datums = new Date(item.Datum);
        let priset = Number(item.Pris)
        if (item.Typavköp === "avgift") {
            if (item.Kategori === "Kök&fester") {
                sheet.addRow({kassaKredit: priset, ver: i + 1, Datum: Datums, kökDebit: priset});
            } else if (item.Kategori === "Laborationer") {
                sheet.addRow({kassaKredit: priset, ver: i + 1, Datum: Datums, laborationerDebit: priset});
            } else if (item.Kategori === "Övrigt") {
                sheet.addRow({kassaKredit: priset, ver: i + 1, Datum: Datums, övrigtDebit: priset});
            } else if (item.Kategori === "Medlemsavgifter") {
                sheet.addRow({kassaKredit: priset, ver: i + 1, Datum: Datums, medlemsavgifterDebit: priset});
            } else if (item.Kategori === "Försäljning") {
                sheet.addRow({kassaKredit: priset, ver: i + 1, Datum: Datums, försäljningDebit: priset});
            } else if (item.Kategori === "NF-artiklar") {
                sheet.addRow({kassaKredit: priset, ver: i + 1, Datum: Datums, artiklarDebit: priset});
            }
            sheet.getCell(`B${i + 3}`).value = {
                hyperlink: item.Bild,
                text: item.Vara
            }
        } else if (item.Typavköp === "intäkt") {
            console.log(item)
            if (item.Kategori === "Kök&fester") {
                sheet.addRow({kassaDebit: priset, ver: i + 1, Datum: Datums, kökKredit: priset});
            } else if (item.Kategori === "Laborationer") {
                sheet.addRow({kassaDebit: priset, ver: i + 1, Datum: Datums, laborationerKredit: priset});
            } else if (item.Kategori === "Övrigt") {
                sheet.addRow({kassaDebit: priset, ver: i + 1, Datum: Datums, övrigtKredit: priset});
            } else if (item.Kategori === "Medlemsavgifter") {
                sheet.addRow({kassaDebit: priset, ver: i + 1, Datum: Datums, medlemsavgifterKredit: priset});
            } else if (item.Kategori === "Försäljning") {
                sheet.addRow({kassaDebit: priset, ver: i + 1, Datum: Datums, försäljningKredit: priset});
            } else if (item.Kategori === "NF-artiklar") {
                sheet.addRow({kassaDebit: priset, ver: i + 1, Datum: Datums, artiklarKredit: priset});
            }
            sheet.getCell(`B${i + 3}`).value = {
                hyperlink: item.Bild,
                text: item.Vara
            }
        }

    });
    fixaborders()
    for (let i = 0; i < 11; i++) {
        sheet.getCell(`${alphabetList[(i * 2) + 1]}2`).style = {
            fill: {
                type: 'pattern',
                pattern: 'solid',
                fgColor: {argb: 'FFC7CE'},
                bgColor: {argb: 'FFC7CE'}
            },
            font: {
                color: {argb: "9C0006"}
            },
            border: {
                bottom: {
                    style: "thin"
                },
                right: {
                    style: "thin"
                }
            }
        }
        if (`${alphabetList[(i * 2)]}` === "D") {
            sheet.getCell(`${alphabetList[(i * 2)]}2`).style = {
                fill: {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: {argb: 'C6EFCE'},
                    bgColor: {argb: 'C6EFCE'}
                },
                font: {
                    color: {argb: "006100"}
                },
                border: {
                    left: {
                        style: "medium"
                    }, bottom: {
                        style: "thin"
                    }

                }
            }
        } else {
            sheet.getCell(`${alphabetList[(i * 2)]}2`).style = {
                fill: {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: {argb: 'C6EFCE'},
                    bgColor: {argb: 'C6EFCE'}
                },
                font: {
                    color: {argb: "006100"}
                },
                border: {
                    bottom: {
                        style: "thin"
                    }
                }
            }
        }
    }
    sheet.getColumnKey("Datum").width = 18
    sheet.getColumnKey("ver").width = 5
    sheet.getColumnKey("namn").width = 25
    sheet.getColumnKey("ver").alignment = {horizontal: "center"}
    sheet.getColumnKey("Datum").alignment = {horizontal: "left"}
    fixadatavisare()
    workbook.xlsx.writeBuffer().then(function (buffer) {
        saveAs(
            new Blob([buffer], {type: "application/octet-stream"}),
            `Bokföring NF ${new Date().toLocaleDateString()}.xlsx`
        );
    });
}