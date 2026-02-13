<template>
    <div class="Report_table-wrapper">
        <table class="Report_table">
            <thead class="Report_thead">
                <tr class="Report_thead-row">
                    <th class="Report_th" v-for="col in computedColumns" :key="col.key">
                        {{ col.label }}
                    </th>
                </tr>
            </thead>

            <tbody class="Report_tbody">
                <tr v-for="(row, rowIndex) in rows" :key="rowIndex" class="Report_tbody-row">
                    <td v-for="col in computedColumns" :key="col.key" class="Report_td">
                        <!-- slot override -->
                        <slot :name="col.key" :row="row" :index="rowIndex">
                            {{ getValue(row, col, rowIndex) }}
                        </slot>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "ReportTable",
        props: {
            rows: {
                type: Array,
                required: true
            },
            columns: {
                type: Array,
                default: () => []
            },
            auto: {
                type: Boolean,
                default: false
            }
        },

        computed: {
            computedColumns() {
                if (this.auto && this.rows.length > 0) {
                    return Object.keys(this.rows[0]).map((key, index) => ({
                        label: this.formatColumnLabel(key),
                        key: key,
                        index: index
                    }));
                }
                return this.columns;
            }
        },

        methods: {
            formatColumnLabel(key) {
                return key
                    .replace(/_/g, " ")           // Replace underscores with spaces
                    .toUpperCase();                // Convert to uppercase
            },

            getValue(row, col, index) {
                if (col.key === "__index") return index + 1;
                if (col.format) return col.format.call(this.$parent, row);
                return row[col.key] ?? "-";
            }
        }
    };
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .Report_container {
        width: 100%;
        min-height: calc(100vh - 70px);
        background-color: #f5f7fa;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .Report_title {
        text-align: center;
        font-size: 28px;
        font-weight: 700;
        color: #2c3e50;
    }

    .Report_form-section {
        max-width: 1400px;
        margin: 30px auto;
        padding: 0 30px;
    }

    .Report_form-card {
        background-color: #fff;
        padding: 30px 40px;
        border-radius: 8px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        margin-bottom: 30px;
    }

    /* Table Wrapper */
    .Report_table-wrapper {
        overflow-x: auto;
        overflow-y: auto;
        max-height: 720px;
        margin-top: 0;
        border-radius: 0;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
        background-color: #fff;
        scroll-behavior: smooth;
        scrollbar-width: thin;
    }


    .Report_table {
        width: 100%;
        border-collapse: collapse;
        background-color: #fff;
        min-width: 1200px;
    }


    .Report_thead {
        background-color: #1e8b7e;
        color: white;
        position: sticky;
        top: 0;
        z-index: 10;
    }

    .Report_thead-row {
        border-bottom: none;
    }

    .Report_th {
        padding: 12px 10px;
        text-align: left;
        font-size: 14px;
        font-weight: 600;
        text-transform: none;
        letter-spacing: 0.3px;
        white-space: nowrap;
        border-right: 1px solid rgba(255, 255, 255, 0.2);
        border-bottom: 1px solid #e2e8f0;
        font-family: calibri, sans-serif;
    }

    .Report_th:first-child {
        border-left: 1px solid #e2e8f0;
    }

    .Report_th:last-child {
        border-right: 1px solid #e2e8f0;
    }


    .Report_tbody {
        background-color: #fff;
    }

    .Report_tbody-row {
        border-bottom: 1px solid #e2e8f0;
        transition: background-color 0.3s ease;
    }

    .Report_tbody-row:nth-child(even) {
        background-color: #f9f9f9;
    }

    .Report_tbody-row:hover {
        background-color: #e8f4f8;
    }

    .Report_tbody-row:last-child {
        border-bottom: 1px solid #e2e8f0;
    }


    .Report_tbody-row.highlighted {
        background-color: #b8dce8 !important;
    }

    .Report_td {
        padding: 10px;
        font-size: 11px;
        text-align: left;
        color: #374151;
        border-right: 1px solid #e2e8f0;
        border-bottom: 1px solid #e2e8f0;
        vertical-align: top;
        line-height: 1.5;
        word-wrap: break-word;
        overflow-wrap: break-word;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    .Report_td:first-child {
        border-left: 1px solid #e2e8f0;
    }

    .Report_td:last-child {
        border-right: 1px solid #e2e8f0;
    }

    /* Responsive Design */
    @media (max-width: 1200px) {
        .Report_form-row {
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }

        .Report_region-branch-section {
            display: grid;
            grid-column: 1 / -1;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }

        .Report_region-branch-section :deep(.region-branch-container) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }

        .Report_table-wrapper {
            max-height: 720px;
            overflow-y: scroll;
            width: 98%;
            margin: auto;
            margin-top: 5px;
        }

        .Report_th,
        .Report_td {
            font-size: 13px;
            padding: 8px;
        }
    }

    @media (max-width: 768px) {
        .Report_form-section {
            padding: 0 15px;
        }

        .Report_form-card {
            padding: 20px;
        }

        .Report_title {
            font-size: 22px;
            padding: 20px;
        }

        .Report_form-row {
            grid-template-columns: 1fr;
        }

        .Report_region-branch-section {
            grid-template-columns: 1fr;
        }

        .Report_region-branch-section :deep(.region-branch-container) {
            grid-template-columns: 1fr;
        }

        .Report_btn-submit {
            width: 100%;
        }

        .Report_th,
        .Report_td {
            font-size: 11px;
            padding: 8px;
        }

        .Report_table {
            min-width: auto;
        }
    }

    /* Custom Scrollbar */
    .Report_table-wrapper::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    .Report_table-wrapper::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    .Report_table-wrapper::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 4px;
    }

    .Report_table-wrapper::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
</style>