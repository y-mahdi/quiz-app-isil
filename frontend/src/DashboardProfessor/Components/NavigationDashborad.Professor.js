

import dashboard from '../../Icons/dashboard.svg';
import bankicon from '../../Icons/bank.svg';
import question from '../../Icons/question.svg';
import setting from '../../Icons/setting.svg';
export default function NavigationDashboardProfessor() {
    return(
        <div className="body-dashboard-professor-container-part1">
                <button className='button-navigation-container'>
                    <div>
                        <img src={dashboard} alt='home icon' width='50px'/>
                        <div>Dashboard</div>
                    </div>
                </button>
                <button className='button-navigation-container'>
                    <div>
                        <img src={bankicon} alt='question icon' width='50px'/>
                        <div>Questions</div>
                    </div>
                </button>
                <button className='button-navigation-container'>
                    <div>
                        <img src={question} alt='quiz icon' width='50px'/>
                        <div>Quizes</div>
                    </div>
                </button>
                <button className='button-navigation-container'>
                    <div>
                        <img src={setting} alt='setting icon' width='50px'/>
                        <div>Setting</div>
                    </div>
                </button>
         </div>
    )
}