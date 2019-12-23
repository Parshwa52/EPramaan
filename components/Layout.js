import React from 'react';
import { Form, Radio,Button,Input,Image,Container} from 'semantic-ui-react'

export default props => {
  return (
     <
    div   >
  <
    link rel = "stylesheet"
    href = "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" / >
    <
    center ><table>
    <tr><td><Image src="/static/epramaan.png" className="team" height="30%"/></td><td>
     <div style={{color:'#2185D0'}}>E - Pramaan </div> </td><td>
     <div style={{fontSize:'100px', fontFamily:'Algerian'}}>E - Pramaan </div> </td></tr>
    </table>
    </center >
    <hr/><br/>
    {
     props.children
   }
    <
    /div>
  );
}
