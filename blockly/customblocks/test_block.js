Blockly.Blocks['integer'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("Int")
        .appendField(new Blockly.FieldVariable("i"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#999999");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



Blockly.Blocks['my_if'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("if (")
        .appendField(new Blockly.FieldVariable("item"), "NAME")
        .appendField(") {");
    this.appendStatementInput("STM")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput()
        .appendField("}");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#b38080");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['my_for'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("for (")
        .appendField(new Blockly.FieldVariable("item"), "NAME")
        .appendField(") {");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput()
        .appendField("}");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#c2d9f0");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['my_if_con'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("if (")
        .appendField(new Blockly.FieldVariable("item"), "ITEM1")
        .appendField(new Blockly.FieldDropdown([["==","EQ"], [">=","GEQ"], ["<=","LEQ"], [">","GT"], ["<","LT"]]), "CONS")
        .appendField(new Blockly.FieldVariable("item"), "ITEM2")
        .appendField(") {");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput()
        .appendField("}");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null)
    this.setColour("#b38080");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['my_if_con'] = function(block) {
  var variable_item1 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('ITEM1'), Blockly.Variables.NAME_TYPE);
  var dropdown_cons = block.getFieldValue('CONS');
  var variable_item2 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('ITEM2'), Blockly.Variables.NAME_TYPE);
  var statements_stm = Blockly.JavaScript.statementToCode(block, 'STM');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
