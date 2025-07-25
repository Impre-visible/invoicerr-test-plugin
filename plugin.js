export default class TestPlugin {
  name = "Factur-X";
  description = "This plugin is only used to test the plugin feature of invoicerr";

  pdf_format_info() {
    return {
      format_name: "Factur-X (Plugin)",
      format_key: "factur-x-plugin", // A unique key used to identify the format, make it as unique as possible
    };
  }

  pdf_format(invoice) {
    return Buffer.from(invoice.exportXml('facturx'), 'utf-8'); // Simply export the factur-x thing
  }
}
