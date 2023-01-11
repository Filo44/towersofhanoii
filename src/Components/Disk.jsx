import React, { useState, useEffect } from 'react';

function Disk({diskNum}) {
     const something={
          width:`${50+(diskNum*40)}px`,
          background:"#519872"
     }
     return ( 
          <div className='disk' style={something}></div>
      );
}

export default Disk;