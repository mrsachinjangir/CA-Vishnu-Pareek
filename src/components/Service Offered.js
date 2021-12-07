import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
function ServiceOffered(){
    return(
<>
<div className="name">
    <h2> SERVICES OFFERED</h2>
</div>
<div className="about">

    <div className="welcomeabout">
   <div><Calendar className="calendar" />
   <div>
       <h3>SERVICES OFFERED</h3>
       <p>1. PROFESSIONAL CONSULTANCY IN RESPECT OF INCOME TAX AND GST</p>
       <div><h4>KINDS OF SERVICES OFFERED</h4>
       <ul>
           <li>Suggesting our valuable clients regarding the crucial   planning of their financial affairs so as to avail the optimum benefit of available deductions and exemptions under various Acts of Income Tax and GST.</li>
           <li>Constantly updating the practical knowledge of our clients with the help of latest Notifications & Circulars issued by the Departments from time to time and helping the clients in understanding the implications of relevant complex statutory provisions in the context of problems/difficulties faced by them.</li>
           <li>Preparing the legal replies/Opinions to the various Show Cause Notices received issued by Departments to  the clients and providing consultancy to them on the specific problems/difficulties faced by them under various Acts.</li>
           <li>Suggesting the legal & effective  ways  to  the clients in timely compliance of various statutory obligations cast on them such as seeking timely Registration under GST, Preparing and filing well in time Tax Returns etc.</li>
       </ul>
       <h4>2. REPRESENTATIONAL SERVICES  </h4>
       <p>We also provide top quality representational services to our treasured clients under the following Acts:-</p>
       <ol>
           <li>Income Tax Act 1961.</li>
           <li>Goods and Service Tax Act, 2017</li>
           <li>Companies Act 1956.</li>
       </ol>
       <p>While representing our invaluable clients before the appropriate statutory authorities, we accord top priority to safeguarding the interest & goodwill of the concerned clients. Every possible effort is made by us with a view to win the relevant case for the benefit of our client</p>
       <h4>3. BUSINESS PROCESS OUTSOURCING SERVICES</h4>
       <p>Outsourcing has become an order of the day. In order to help our clients to focus their precious time and limited energy on key business areas, we offer our highly experienced & reliable Business Process Outsourcing Services to our clients. Primarily depending upon the requirements and financial position of the clients, these outsourcing services can be either multidimensional or restricted to a particular aspect of business.</p>
       <h4>4. AUDITING SERVICES</h4>
       <p>Being a rapidly growing professional firm of Chartered Accountants, auditing is the core competency area of our firm. Further, in order to meet the diverse requirements of our clients following broad categories of audit services are offered by us:-</p>
       <ul><li>Internal Audit</li>
       <li>Statutory Audit</li>
       <li>Concurrent Audit</li>
       <li>Revenue Audit</li>
       <li>Bank Audit</li></ul>
       </div>
   </div></div> 
    </div>
</div>
</>
    );
};
export default ServiceOffered;