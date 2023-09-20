
import { figures } from "../constant";
import { RiShareBoxLine,RiGithubFill } from "react-icons/ri"; 
import Figcaption from "./Figcaption";
const CardProject = ({ nunCard,titleMain }) => {
  
  const newArr = figures.slice(nunCard);



  return (
    <div className="wrapper mt-2xl">
      <h2 className="dark:text-slate-300 text-size-2"># {titleMain}</h2>
      <div className="box-grid gap-lg mt-lg">
        {newArr.map((figure) => (
          <div key={figure.label} className="card pb-xs">
            <figure>
              <a href={figure.href} target="_blank">
                <img
                  className="aspect-video object-cover dark:brightness-75"
                  src={figure.img}
                  alt={figure.label}
                />
              </a>
              <h3 className="text-base mt-sm dark:text-slate-300">{figure.title}</h3>
            <Figcaption {...figure} otroValor={'Valor'}></Figcaption>
            </figure>
            <div className="mt-xs">
            <a className="btn-link dark:text-slate-400 dark:decoration-slate-400" href={figure.href} target="_blank">{figure.title} <RiShareBoxLine className="align-middle"></RiShareBoxLine></a>
                <a href={figure.gitHub} target="_blank"><RiGithubFill className="align-middle ml-sm dark:text-slate-400 dark:decoration-slate-400"></RiGithubFill></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardProject;
