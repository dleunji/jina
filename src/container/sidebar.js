import {Sidebar} from '../component';
import {useSelector, useDispatch} from 'react-redux';

const SidebarContainer = () => {
  const dispatch = useDispatch();
  const jina = useSelector(state=>state.jina);
  console.log(jina);
  const onChange = (id) => {
    console.log("바뀌라");
    dispatch({type: 'MODE_CHANGE', id : id});
    console.log(jina);
  }
  return (
  <Sidebar onChange={onChange}/>
  );
}

export default SidebarContainer;