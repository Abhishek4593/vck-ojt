import Header from "../components/Header/Header";

const NotFoundPage = () => {
    return(
        <div>
            <Header/>
            <div >
               className="page-container"
               style={{
                textAlign: "center",
                minHeight: "calc(100vh - 200px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
               }}
            

               </div>
               <h1> 404 - Page Not Found</h1>
               <p>Oops! The page you're looking for doesn't exist.</p>
               <p>
                 You might want to return to the{" "}
                 <link to="/" className="btn">
                  Home Page
                 </link>
                 .
               </p>
                <img
                   src="C:\Users\admin\Desktop\images.jpeg/300x200x?text=404+Error"
                   alt="Page Not Found"
                   style={{ marginTop: "20px", maxWidth: "100", height: "auto"}}
                   />
               
              
                  
        </div>
    )
}

export default NotFoundPage;