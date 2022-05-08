
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
import Social from './Component/Profile/Social';

function App() {
  return (
    <div className="container mt-5">
    
    <div className="row d-flex justify-content-center">
        
        <div className="col-md-7">
            
            <div className="card p-3 py-4">
                
                <ProfilePhoto />
                
                <div className="text-center mt-3">
                    
                    <FullName />
                    <span>Développeur Web</span>
                    
                    <Address />
                    
                     <Social />
                    
                    
                    
                    
                </div>
                
               
                
                
            </div>
            
        </div>
        
    </div>
    
</div>
  );
}

export default App;
