import React from 'react';
import ScriptTag from 'react-script-tag';
import PropTypes from 'prop-types';

class CustomScriptTag extends ScriptTag {
    static propTypes = {
        onLoad: PropTypes.func
    };

    constructor(props, context) {
        super(props, context);
        this.domRef = null;
        this.state = {
            isHydrated: props.isHydrating,
            additionalNode: null,
            removeAdditionalNode: null
        };
    }

    componentWillReceiveProps(nextProps) {
        // This logic assumes that the <script> only need to be updated if the 'src' or 'innerHTML' has changed
        //  - this prevents the <script> from updating unnecessarily, which prevents additional 'onload' events

        this.setState({
            removeAdditionalNode: this.state.additionalNode,
            additionalNode: null
        });
    }

    render() {
        const { additionalNode } = this.state;
        if (additionalNode !== null) {
            return null;
        }

        // The 'isHydrating' prop must NOT be passed to the script tag
        // eslint-disable-next-line no-unused-vars
        const { isHydrating, ...tagProps } = this.props;
        return React.createElement('script', {...tagProps, ref: (tag) => this.domRef = tag });
    }

}

export default CustomScriptTag;