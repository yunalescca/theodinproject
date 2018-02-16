//Blockly.HSV_SATURATION = 1;
//Blockly.HSV_VALUE = 1;

Blockly.Blocks['integer'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("Number")
        .appendField("Int")
        .appendField(new Blockly.FieldVariable("i"), "NAME");
    this.setColour("#d9a6a6");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
