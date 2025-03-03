import "./SkillsModal.css";

export default function IconContainer({name, icon} : {name: string, icon: any}) {

    return (
        <div key={name} className="tech">
              <div className="icon-container">
                <span className="icon">
                  {icon} {name}
                </span>
              </div>
            </div>
    )

}