module.exports = {
    formatDisplayName: function ( value ) {
        if (!value) {
            return value;
        }
        if (value.startsWith('"') && value.endsWith('"')) {
            value = value.substring(1, value.length-1);
        }
        value = value.replace('External module', 'Module');
        if (value.endsWith('.d')){
            value = value.substring(0, value.length - '.d'.length);
        }
        return value;
    }
  }