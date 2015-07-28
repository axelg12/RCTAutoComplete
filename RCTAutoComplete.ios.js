var React = require('react-native');
var StyleSheet = require('StyleSheet');
var { requireNativeComponent } = require('react-native');

var NativeAutoComplete = requireNativeComponent('RCTAutoComplete', null);

var RCTAutoComplete = React.createClass({

    propTypes: {
        suggestions: React.PropTypes.array
    },

    getDefaultProps: function() {
        return {
            suggestions: [],
            placeholder: 'placeholder',
            styles: styles.AutoComplete
        };
    },

    _onChange: function (event) {
        event.nativeEvent.possibleCompletionsForString
            && this.props.onTyping
            && this.props.onTyping(event.nativeEvent.possibleCompletionsForString);

        event.nativeEvent.didSelectAutoCompleteString
            && this.props.onSelect
            && this.props.onSelect(event.nativeEvent.didSelectAutoCompleteString);
    },

    render: function () {
        return (
            <NativeAutoComplete
            style={this.props.style}
            onChange={this._onChange}
            suggestions={this.props.suggestions}
            placeholder={this.props.placeholder}
            />
        )
    }

});

var styles = StyleSheet.create({
    AutoComplete: {height: 50, width: 100}
});

module.exports = RCTAutoComplete
