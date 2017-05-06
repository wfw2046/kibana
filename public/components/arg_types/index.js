import { connect } from 'react-redux';
import { branch, renderComponent } from 'recompose';
import { get } from 'lodash';
import { ArgTypeNotSelected } from './arg_type_not_selected';
import { ArgTypes as Component } from './arg_types';
// import { getElementById, getSelectedElement } from '../../state/getters/workpad';

const whenSelected = branch(
  props => !props.selectedElement,
  renderComponent(ArgTypeNotSelected)
);

const mapStateToProps = () => {
  // const selectedElement = getElementById(state, getSelectedElement(state));
  const selectedElement = null;

  return {
    chain: get(selectedElement, 'ast.chain'),
  };
};

export const ArgTypes = connect(
  mapStateToProps,
)(whenSelected(Component));
