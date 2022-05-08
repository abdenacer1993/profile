import React from "react";
import Moi from "./profilephoto/moi.jpg";
function ProfilePhoto() {
    return ( 
        <div className="text-center">
  
  <img src={Moi} width="250" className="rounded-circle" alt=""/>
</div>


     );
}

export default ProfilePhoto;