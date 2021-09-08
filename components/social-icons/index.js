import Link from "next/link";

export default function SocialIcons() {
return (
          <>
            <li className="text-3xl mx-4">
              <a href="https://github.com/iescandon" target="_blank" rel="noreferrer" tabIndex={-1}>
                <i className="transition duration-200 ease-in-out fab fa-github-square text-coolBlue lg:hover:text-goldenrod" tabIndex={0} onKeyDown={(e)=>{
                      if (e.key === "Enter" || "") {
                        window.location.href = "https://github.com/iescandon";
                      }
                    }}></i>
              </a>
            </li>
            <li className="text-3xl mx-4">
              <a href="https://www.linkedin.com/in/iescandon/" target="_blank" rel="noreferrer" tabIndex={-1}>
                <i className="transition duration-200 ease-in-out fab fa-linkedin text-coolBlue lg:hover:text-goldenrod" tabIndex={0} onKeyDown={(e)=>{
                      if (e.key === "Enter" || "") {
                        window.location.href = "https://www.linkedin.com/in/iescandon/";
                      }
                    }}></i>
              </a>
            </li>
            <li className="text-3xl mx-4">
              <a href="https://www.instagram.com/inescandon/" target="_blank" rel="noreferrer" tabIndex={-1}>
                <i className="transition duration-200 ease-in-out fab fa-instagram-square text-coolBlue lg:hover:text-goldenrod" tabIndex={0} onKeyDown={(e)=>{
                      if (e.key === "Enter" || "") {
                        window.location.href = "https://www.instagram.com/inescandon/";
                      }
                    }}></i>
              </a>
            </li>
          </> 
      )
}