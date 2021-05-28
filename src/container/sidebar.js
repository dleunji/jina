import {Sidebar} from '../component';
import {useSelector, useDispatch} from 'react-redux';

const SidebarContainer = () => {
  const dispatch = useDispatch();
  const onChange = (id) => {
    dispatch({type: 'MODE_CHANGE', id : id});
  }
  return (
  <Sidebar onChange={onChange}/>
  );
}

export default SidebarContainer;