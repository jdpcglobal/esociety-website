
import React, { useState } from 'react';


import Footer from "./footer";

const ImageScrollSection = () => {
  const handleClickScroll = (targetId) => {
    const targetElement = document.getElementById(`image-${targetId}-content`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
    const [activeItem, setActiveItem] = useState('Terms of Subscription'); 

    const handleItemClick = (itemName) => {
        setActiveItem(itemName); // Update active item state
      };
      

  return (
    <>
    <div className="container47">
    <div className="container-fluid79">
      <div className="container-fluid79 colo">
        <nav className="navbar navbar-expand-lg navbar-light  p-3 sidecolor">
          <div className="container d-flex justify-content-between align-items-center">
            <a className="navbar-brand colo1" href="/home ">
              ADDA ERP
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link colo1" href="/pricing">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link colo1" href="/customer-love">
                    Customer Love
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link colo1" href="/blog">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link colo1" href="/contact">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                <form className="d-flex">
            <a className="btn btn-outline-success mx-2 colo1 "   href="/login">Sign In</a>
            <a className="btn btn-outline-success me-2 mx-2 colo1"  href="/search-name" >Start Free Trial</a>
          </form>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>
        </div>
        <h1 className='center47'>Terms and Conditions</h1>
       
    </div>
    <div className='down5'>

    <div className="image-scroll-section">
      <div className="image-row">
        
      <p className="down" onClick={() => handleClickScroll(1)}>
        <li className={activeItem === 'Terms of Subscription' ? 'active' : ''} onClick={() => handleItemClick('Terms of Subscription')}>
          Terms of Subscription
        </li>
      </p>
      <p className="down" onClick={() => handleClickScroll(2)}>
        <li className={activeItem === 'Terms of Service' ? 'active' : ''} onClick={() => handleItemClick('Terms of Service')}>
          Terms of Service
        </li>
      </p>
      
      <p className="down" onClick={() => handleClickScroll(3)}>
        <li className={activeItem === 'Privacy Policy' ? 'active' : ''} onClick={() => handleItemClick('Privacy Policy')}>
          Privacy Policy
        </li>
      </p>
       
      <p className="down" onClick={() => handleClickScroll(4)}>
        <li className={activeItem === 'DPA' ? 'active' : ''} onClick={() => handleItemClick('DPA')}>
        DPA
        </li>
      </p>
      
        
       
        </div>
        </div>
        <h1 className='down3'>This document is an electronic record and is generated by a computer system 
        and does not require any physical or digital signatures.</h1>

   <p className='down3'>Please carefully read the terms and conditions of the following agreement.
 It contains very important information about your rights and obligations, 
 as well as limitations and exclusions that may apply to you.</p>


         <div className="content-section47">
        <div id="image-1-content" className="image-content47">
         <h1 className='down6'>TERMS OF SUBSCRIPTION</h1>
         <h1 className='down7'>Last Updated: February 2021</h1>
         <h1 className='down3'>This Terms of Subscription  
          between 
           and you, or the entity you represent  governing your use
            of the host of Products and Services of the Service Provider . In the event if you are representing an entity, you hereby
          affirm that requisite approvals and authorization to bind the entity has been obtained.</h1>
         <div className='down8'>1. Intellectual Property Rights</div>
         <div className='down3'>
         1.1. Subject to the terms of this Agreement and payment of the fees as per the Order Form, the Service 
         Provider hereby grants to the Customer, a non-sub licensable, limited, restricted, revocable,
          non-transferable, non-exclusive subscription to access and use the Product
          
           , solely for the availing of Service Provider’s Services. The Parties shall execute an order
            form with the Service Provider pursuant to which Services shall be rendered to Customer 
            on the terms and conditions mentioned thereto. Services shall be facilitated through the Product.
             The Order Form shall form an integral part of this Agreement and in the event of conflict
              between this Agreement and the Order Form, the latter shall prevail.
1.2. The Customer shall ensure that its employees, users, account managers or anyone else acting on 
its behalf ,
 who are using the Product comply with the terms and conditions as set out in this Agreement.
         </div>

         <div className='down8'>2. Indemnification</div>
         <div className='down3'>
         2.1. In consideration for the Services and the usage of the Product, the Customer shall pay the
          Service Provider, the fees as agreed in respective order form accepted by Customer.
          <div className='down3'> 2.2. The Service Provider shall be entitled to present the invoices for the fees for the Product 
            and Services on the terms and conditions mentioned in the Order Form.</div>
        
            2.3. In the event if the payment against Invoices have not been made by Customer within the stipulated time, Service Provider shall be entitled to discontinue to provide its Services
             and suspend Service Provider/ Personnel’s access to use the Product.
         </div>

         <div className='down8'>3. Restriction on Usage </div>
         <div className='down3'>3.1. Customer represents and warrants that:</div>
         i. it shall not rent, lease, distribute, license, sublicense, sell, resell,
          assign, transfer, timeshare, or otherwise make Product available to any
           third-party contrary to the terms stated herein;
           <div className='down3'></div>ii. it shall ensure that the information which shall be provided to the Service Provider shall be true and shall not contain any information which is not obtained lawfully as per the applicable laws;
           iii. it shall not reverse engineer, de-compile, disassemble or otherwise attempt to discover the source code or underlying ideas or algorithms of the Product;
           <div className='down3'>iv. it shall not do any act which shall damage, disable, overburden or impair Service Provider’s servers or network, or interfere with any other party’s use and enjoyment of the Product;</div>
           v. it shall not access the Product in order to build a commercially available product or service which competes with the Product;
         
         <div className='down8'>4. Confidential Information</div>
         <div className='down3'>
          The Receiving Party may disclose Confidential Information, if required to do so under applicable law, rule or order, provided that the Receiving Party where reasonably practicable and to the extent legally permissible, provides the Disclosing Party, with prior written notice of the required disclosure so that the Disclosing Party may seek a protective order or other appropriate remedy, and provided further that the Receiving Party discloses no more Confidential Information of the Disclosing Party than is reasonably necessary in order to respond to the required disclosure.
 Information shall not be considered “Confidential Information” to the extent, but only to the extent, that such information: (a) was already known to the Receiving Party free of any restriction at the time it is obtained from the Disclosing Party; (b) is subsequently learned from an independent third party free of any restrictions and without breach of this Agreement or any other agreements; (c) is or becomes publicly available through no wrongful act of the Receiving Party; or (d) is independently developed by the Receiving Party without reference to any Confidential Information.
 At the request and option of the Disclosing Party, or in the event of termination or expiration of this Agreement (or any part thereof), the Receiving Party shall promptly: (a) return to the Disclosing Party the Confidential Information and all documentation, information, Services, and data related to the Agreement, even if not Confidential Information); or (b) destroy or permanently erase on all forms of recordation the Confidential Information and, if requested by the Disclosing Party, acknowledge in writing that all such Confidential Information has been destroyed or permanently erased.
 The confidentiality obligation under this Agreement shall survive termination of this Agreement for a period of two (2) years.
         </div>
         
         <div className='down8'>5. Term and Termination</div>
         <div className='down3'>
         This Agreement shall be valid from the Subscription Start Date (as defined the Order Form), until the date it is explicitly terminated.
 This Agreement is subject to review by either party at any time during the Subscription Term. Either Party shall have the right to terminate this Agreement, by giving prior written notice of not less than thirty (30) days, and the Customer data will be available for the Customer to be extracted during this period. The Notice period has to be within the Subscription Paid Duration (Subscription Term).
 After such thirty (30) day’s period, access of the Customer will be discontinued. The Service Provider will retain the Customer’s data for ninety (90) days in case if the Customer desires to re-activate the Subscription by paying a re-activation fee. Post expiry of ninety (90) day’s period, the Service Provider shall have no obligation to maintain or provide any Customer data and shall thereafter, unless legally prohibited, or prohibited by the Data Subject, delete the Customer Data in our systems or otherwise in its possession or under its control.
 Upon non-payment of Subscription dues within the subscription invoice due date, the Subscription is considered terminated and the Customer’s access to the Services shall be discontinued. In the event of termination, Service Provider shall revoke the rights granted under clause 1.1.
 In the event of termination of this Agreement, Customer shall be liable to make payments to Service Provider for all the Services availed and for usage of the Product, till the date of such termination.
Refund can be claimed, due to cause as listed in Clause 6.4, for Advance Payments of Annual or more, if initiated within thirty (30) days of the acknowledgement of payment by Service Provider.
 Notwithstanding anything to the contrary elsewhere contained in the Agreement, the Service Provider shall have the right to suspend the Customer’s usage of the Product and Services forthwith, if Customer is in breach of the terms and conditions stated in clause 3.1 of the Agreement.
         </div>
         <div className='down8'> 6. Indemnification</div>
         <div className="down3">
          The Service Provider, jointly and severally, agrees to indemnify, defend and hold Customer, its directors, officers and employees harmless from and against any and all losses, liabilities, claims, damages, costs and expenses, including reasonable legal fees and disbursements in connection with any claim asserted against or incurred by Customer  or on account of any damages, claims, liabilities fines, penalties  which directly arise out of, result from or may be payable by virtue of any breach of any applicable laws; gross negligent act and willful misconduct. Service Provider shall further agree to indemnify defend and hold Customer harmless from and against any Claims and / or Losses incurred by Customer on account of any third-party claims arising out of infringement of any intellectual property rights of any third party by Service Provider from the usage of Product by Customer. However, Service Provider shall not have any liability to indemnify for any claim arising out of infringing any intellectual property rights of third-party to the extent that any infringement or claim thereof is attributable to  the combination, operation or use of Product with the equipment or software supplied by the Customer, where the Product would not itself be infringing;  compliance with designs, instructions provided by Customer;  use of Product in an application or environment for which it was not designed or contemplated under this Agreement.
The Customer, jointly and severally, agrees to indemnify, defend and hold Service Provider, its directors, officers and employees harmless from and against any and all losses, liabilities, claims, damages, costs and expenses, including reasonable legal fees and disbursements in connection with any claim asserted against or incurred by Service Provider  or on account of any damages, claims, liabilities fines, penalties  which directly arise out of, or result from the infringement of any intellectual property rights; or breach of applicable laws by the Customer.
         </div>

        </div>
        <div id="image-2-content" className="image-content47">
        <h1 className='down6'>TERMS OF SERVICE</h1>
         <h1 className='down7'>Last Updated: February 2021</h1>
         <div className='down3'> The Service Provider requests User (as defined below) to go through this Terms of Service prior to accessing the Product or availing Services (as defined below) using the Product. If User continues to utilize the Services, the User irrevocably and unconditionally is agreeing to comply with, abide by and be bound by all these obligations as stipulated in this Terms of Service, which together read with the privacy policy available at (“Privacy Policy”), and any other applicable policies referred to herein or made available on the Product (collectively referred as “Terms and Conditions”). The Terms and Conditions shall govern the Service Provider’s relationship with User in relation to the usage of the Product. These Terms and Conditions supersede all previous oral, written terms and conditions (if any) communicated to User and shall act as a binding agreement between Service Provider and the User.</div>
         <div className='down8'>1. Updation of Terms and Conditions</div>
         <div className="down3">
         The User's use of the Product is subject to the Terms and Conditions, which may be updated, amended, modified or revised by us from time to time with notice to the User. The Updated Terms and Conditions shall be effective immediately and shall supersede these. If the User continues to use the Product and/or Services after the Updated Terms and Conditions have been published, it shall be deemed that the User has read and understood and accept the Updated Terms and Conditions. Any reference to Terms of Service shall refer to the latest version of the Terms of Service.
         </div>
         <div className='down8'>2. List of Prohibited Items</div>
         <div className='down3'>Users are prohibited from aiding in the sale / exchange of any item present in the below list via the Product. This is indicative and not exhaustive and items can be added as and when prohibited to law or brought to Service Provider’s notice.</div>
         Airline tickets that restrict transfer, other unauthorized ticket sale - Alcohol or tobacco products - Blood, bodily fluids or parts - Bulk email or mailing lists that contain names, addresses, phone numbers, or other personal identifying info Burglary tools, including but not limited to lock-picks or motor vehicle keys - Controlled substances or illegal drugs, substances and items used to manufacture controlled substances and drug paraphernalia -Counterfeit currency, coins and stamps, tickets, as well as equipment designed to make them - Counterfeit, replica, or knock-off brand name goods - Coupons or gift cards that restrict transfer, other unauthorized coupons or gift cards - False identification cards, forged certificates - Fireworks, firearms and explosives - Gambling items, including but not limited to lottery tickets - Material that infringes copyright, including but not limited to software or other unauthorized digital goods sale - Pornography - Pet animal parts, blood, or fluids - Prescription drugs and medical devices, including but not limited to prescription or contact lenses, defibrillators, hypodermic needles or hearing aids - Stolen property, or property with serial number removed or altered.
         <div className='down3'>The Service Provider reserves the right to suspend their Services to Users involving in service abuse. Service Provider further reserves the right to add/delete items in the above- mentioned list at their sole discretion.</div>
         
         <div className='down8'>3. Third Party Services</div>
         <div className='down3'>While availing Services, Users may connect with third-party service providers (including but not limited to Vendors). The Service Provider is not responsible for, and does not endorse, any third-party services mentioned on the Product. It is hereby stated that Service Provider shall in no way be responsible for any acts or omissions of third parties. Any transaction, dealings or communication otherwise that the User may have with such third parties are at the User’s own risk and Service Provider makes no warranties, express or implied regarding the quality or suitability of the services or products of such third-party vendors. User may be redirected to a third-party website upon clicking on such links, these websites will be governed by its privacy policy and terms of use. Service Provider urges User to be vigilant and cautious of any third-party services that User may render from any third-party or Vendor via the Product. Service Provider shall not be responsible for any transaction or dissemination of information by the User that may take place while accessing these third-party websites.</div>
         <div className='down8'>4. Contact User</div>
         <div className='down3'>The User agrees that Service Provider may contact User through telephone, email, SMS, or any other means of communication for the purpose of:
a. Providing information about Service Provider’s product/services;
b. Obtaining feedback in relation to Product or Services or promotion of Product or Services;
c. Obtaining feedback in relation to any other Users listed on the Product;
d. Resolving any complaints, information, or queries by other Users regarding User's Critical Content; and
e. User agrees to provide User's fullest co-operation further to such communication by Service Provider.

Automated push notifications may be sent to User if User opts to use the mobile application, User may choose to disable the notifications/ opt out of receiving such notifications by modifying the settings in the mobile application.

By submitting suggestions or other feedback regarding the Services/Product, User agrees that Service Provider can use and share such feedback for any purpose without any compensation to User and Service Provider is under no obligation to keep such feedback confidential.</div>
         <div className='down8'>5. Support</div>
         <div className='down3'>The Service Provider offers Support via FAQs, In-App Support, Online chat and Phone Call, based on the Subscription terms.

The User agrees and acknowledges that the Service Provider shall address and attempt to resolve the complaint received in accordance with the standard policies and procedures adopted by the Service Provider, the User’s disapproval/discontent with the outcome/mode of redressal shall not be deemed to mean non-redressal of the complaint by the Service Provider. Any suggestions by Service Provider regarding use of the Services shall not be construed as a warranty.

Support SLAs are available to all Users covered by a Subscription Term. Support SLAs are not available to Users on Trial, or any other unpaid user model.</div>
         <div className='down8'>6. Indemnification</div>
         <div className='down3'>The User shall defend, indemnify, and hold harmless the Service Provider, its affiliates/ subsidiaries/joint venture partners and each of its, and its affiliates’/subsidiaries/joint venture partners’ employees, contractors, directors, suppliers and representatives from all liabilities, losses, claims, and expenses, including reasonable attorneys’ fees, that arise from or relate to (i) User's use or misuse of, or access to, the Services and Product; or (ii) User's violation of the Terms and Conditions; or any applicable law, contract, policy, regulation or other obligation. Service Provider reserves the right to assume the exclusive defense and control of any matter otherwise subject to indemnification by User, in which event User will assist and cooperate with Service Provider in connection therewith.</div>
         <div className='down8'>7. Contact</div>
         <div className='down3'>If User has any questions regarding the Services , User can contact Service Provider</div>
        
        </div>
        <div id="image-3-content" className="image-content47  mt-5">
        <h1 className='down6'>Privacy Policy</h1>
         <h1 className='down7'>Last Updated: February 2021</h1>
         <div className='down3'>This Privacy Policy constitutes a legal agreement between you, as a user of the platform and the company, as the provider of the product. You must be a natural person who is at least 18 years of age.</div>
        <div className='down8'>1. Introduction and applicability of the Privacy Policy:</div>
         <div className='down3'>1.1. The Service Provider is strongly committed to respecting User’s online privacy and recognize the need for appropriate protection and management of any personal information collected and/or collated by us.</div>
         1.2. The purpose of this Privacy Policy is to ensure that there is a framework to collect, use and protect any personal and/or sensitive data collected by us. This Policy defines our procedure for collection, usage, processing, disclosure and protection of any information obtained by Service Provider through the Platform.
         <div className='down8'>2. User's consent:</div>
         <div className='down3'> Please note that by providing the Information (as enumerated upon herein below), User provides User's consent and authorizes Service Provider to collect, use or disclose such Information for the business and research purposes and as stated in this Privacy Policy, the Terms of Service and as permitted or required by applicable law. Moreover, the User understands and hereby consents that this Information may be transferred to any third- party user for the purpose of providing services through the Platform or to any third-party providers for rendering Services (as defined in the Terms of Service), any jointly developed or marketed services, payment processing, order fulfilment, customer services, data analysis, information technology services and such other services which enable Service Provider to provide Services through the Platform.
 This Privacy Policy shall be enforceable in the same manner as any other written agreement. By visiting or accessing the Platform and voluntarily providing Service Provider with Information (including Personal Data), User is consenting to Service Provider's use of Information, in accordance with this Privacy Policy. If User do not agree with this Privacy Policy, User may refuse or withdraw User's consent any time, or alternatively choose to not provide Service Provider with any Personal Information. Under such circumstance, Service Provider may be unable to render Services.
 Such an intimation to withdraw User's consent can be sent to legal@3five8.com The same shall be processed in accordance to our Data Processing Agreement which is made available at DPA</div>
         <div className='down8'>2. Disclosure and Sharing of Information</div>
         <div className='down3'> The Service Provider does not rent, sell or disclose or share any Information that Service Provider collects from User, with third parties, save and except in order to provide User with the Services in accordance with the product functionality. In doing so Service Provider adheres to the procedure prescribed by law and in compliance with our legal obligations. Service Provider may share User's Information in circumstances and for the purposes as specified hereunder:
a. Service Provider shall share the information to the third-party service providers/ vendors, to provide User with the Services as per Product Functionality;
b. When compelled by law: Service Provider may disclose any Information provided by User on the Platform as may be deemed to be necessary or appropriate:
i. under applicable law, including laws outside User's country of residence; to comply with legal process;
ii. to respond to requests from public and government authorities including public and government authorities including public and government authorities outside User's country of residence;
iii. to protect our operations or those of any of our affiliates;
iv. to protect our rights, privacy, safety or property, and/that of our affiliates, User or others;
v. to allow Service Provider to pursue available remedies or limit the damages that Service Provider may sustain; or
vi. to protect against legal liability;
vii. to protect the personal safety of Users of the Platform;</div>
         <div className='down8'>3. User's Rights</div>
         <div className='down3'>The User retains several rights in relation to User's Personal Data as provided under applicable law. These may include the rights to:
a. access, confirm, and review Personal Data User may have provided;
b. correct Personal Data that may be inaccurate or irrelevant;
c. deletion and erasure of User's Personal Data from the publicly available pages of the Platform;
d. receive Personal Data Service Provider holds about User in a portable format;
e. object to or restrict any form of processing User may not be comfortable with;</div>
         <div className='down8'>4. Children’s Privacy</div>
         <div className='down3'>If the Service Provider becomes aware that Service Provider has collected Personal Data from children without verification of parental consent, Service Provider takes steps to remove that information from our servers.</div>
         <div className='down8'>5. User's acceptance of this Privacy Policy</div>
         <div className='down3'>By using or visiting this Platform, user signifies user's agreement of this policy. If User does not agree to any of these terms, the User is advised to not use this platform or services</div>
        

    </div>
        <div id="image-4-content" className="image-content47  mt-5">
        <h1 className='down6'>DATA PROCESSING AGREEMENT</h1>
         <h1 className='down7'>Last Updated: February 2021</h1>
         <div className='down3'>This Data Processing Agreement DPA is to be read in conjunction with the Terms of Subscription which is available at Agreement. The Customer and Service Provider are individually referred to as “Party” and collectively as “Parties”.</div>
        <div className='down8'>1. Introduction</div>
         <div className='down3'>
 This DPA forms an integral part of the Agreement, and all engagement letters, documents, addenda, schedules and exhibits incorporated therein and all communications sent in connection therewith; and
 This DPA amends and replaces any provisions in the Agreement that conflict with the terms of this DPA, provided that, unless expressly stated otherwise in this DPA, nothing in this DPA shall change either party’s exclusions and limitations of liability under the Agreement and all provisions relating to liability and indemnities set out in the remainder of the Agreement shall continue to apply notwithstanding this DPA coming into effect.</div>
         <div className='down8'>2. Definitions</div>
         <div className='down3'>
1.1. This DPA forms an integral part of the Agreement, and all engagement letters, documents, addenda, schedules and exhibits incorporated therein and all communications sent in connection therewith; and
1.2. This DPA amends and replaces any provisions in the Agreement that conflict with the terms of this DPA, provided that, unless expressly stated otherwise in this DPA, nothing in this DPA shall change either party’s exclusions and limitations of liability under the Agreement and all provisions relating to liability and indemnities set out in the remainder of the Agreement shall continue to apply notwithstanding this DPA coming into effect.

2. Definitions
2.1. Affiliate means, with respect to a party, an entity that (directly or indirectly) controls, is controlled by or is under common control with, such party, where control refers to the power to direct or cause the direction of the management policies of another entity, whether through ownership of voting securities, by contract or otherwise.

2.2. Data Controller means the entity which, alone or jointly with others, determines the purposes and means of the Processing of Personal Data and in this DPA shall refer to the Customer.

2.3. Data Protection Laws means all laws and regulations applicable to the Processing of Personal Data under the Agreement and, other laws and regulations of relating to data protection.

2.4. Data Subject means the individual to whom Personal Data relates.

2.5. Data Subject Request means a Data Subject's request to exercise that person's rights under Data Protection Laws in respect of that person's Personal Data, including, without limitation, the right to access, correct, amend, transfer, obtain a copy of, object to the processing of, block or delete such Personal Data.

2.6. Personal Data means any information relating to an identified or identifiable natural person made available to Service Provider in connection with the Services; an identifiable natural person (Data Subject), is one who can be identified, directly or indirectly, in particular by reference to an identification number or to one or more factors specific to the physical, physiological, mental, economic, cultural or social identity of that natural person. Personal Data shall refer to the Personal Data shared by the Customer to the Service Provider for the purpose of availing Services.

2.7. Processing or Process means any operation or set of operations which is performed by or on behalf of Service Provider as part of the Services upon Personal Data, whether or not by automatic means, such as collection, recording, organisation, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, blocking, erasure or destruction.

2.8. Data Processor means the entity which Processes Personal Data on behalf of the Controller and in this DPA shall refer to the Service Provider.

2.9. Security Incident means any personal data breach or other incident that has resulted, or is reasonably likely to result, in any accidental, unauthorised or unlawful destruction, loss, alteration, disclosure of, access to or encryption of (a) Personal Data or (b) other information under Service Provider's control where such incident has the potential to harm Customer's business, Customers, employees, systems or reputation.

2.10. Subcontractor means a third-party subcontractor engaged by or on behalf of Data Processor that will Process Personal Data as part of the performance of the Services.</div>
         <div className='down8'>3. Service Provider's Processing of Personal Data</div>
         <div className='down3'> The Service Provider agrees to Process Personal Data only on Customer's behalf and in accordance with Customer's written instructions or for the performance of the Services as per the Order Form and shall treat Personal Data as Confidential Information subject to the confidentiality provisions of the Agreement. Customer shall instruct Service Provider to Process Personal Data in accordance with the Agreement and to comply with Customer's other reasonable instructions (e.g., via email) where such instructions are consistent with the Agreement.

 The Service Provider shall inform Customer within reasonable time, if, in Service Provider's reasonable opinion, Service Provider believes that any instruction given by Customer infringes Data Protection Laws.

 The Service Provider's Processing of Personal Data shall comply with its obligations under Data Protection Laws and Service Provider shall not perform the Services in a manner that causes Customer to violate Data Protection Laws.</div>
         <div className='down8'>4. Data Subject Rights, Other Complaints and</div>
         <div className='down3'> The Service Provider shall, to the extent permitted by law, promptly notify Customer upon receipt of a Data Subject request. Service Provider shall not respond to any such Data Subject’s request without Customer's prior written instructions.

 The Service Provider shall provide such assistance and take such action as Customer may reasonably request (including assistance by appropriate technical and organisational measures) to allow Service Provider to fulfil its obligations to Customers or under Data Protection Laws in respect of Data Subject Requests, including, without limitation, meeting any deadlines imposed by such obligations.</div>
         <div className='down8'>4. Security</div>
         <div className='down3'>4.1. The Service Provider shall take appropriate technical and organisational measures to ensure the confidentiality, integrity, availability and resilience of Service Provider systems used for Processing Personal Data and protect against the unlawful destruction, loss, alteration, unauthorised disclosure of or access to Personal Data transmitted, stored or otherwise Processed.
4.2. The Customer shall implement appropriate technical and organisational measures, which are designed to ensure that:
a. It complies with all applicable laws for the time being in force;
b. the data protection principles as per Data Protection Laws are implemented; and
c. risks to the rights and freedoms of data subjects are minimised.</div>
         <div className='down8'>5. Term</div>
         <div className='down3'>This DPA shall commence from the Effective Date specified in the Order Form and shall remain valid till the expiry or termination of the Subscription as per the termination clause provided in the Terms of Subscription.</div>
    </div>
        </div>
    </div>
    
       
    
      
        <Footer/>
    </>
  );
};

export default ImageScrollSection;
