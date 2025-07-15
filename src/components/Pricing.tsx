import '../styles/Pricing.css';
const pricing = () => {
  return (
    <>
     <div className="Pricing-header">
          <div>
            <h4 style={{textAlign:'center'}}>Developed by Arun version 2</h4>
            <h1  className='Pricinghead'>Simple, Transparent Pricing</h1>
            <p className='Pricing-headpara'>
            Choose the plan that fits your lending business needs. All plans include access to our core Agent Studio platform.
            </p>
          </div>
     </div>
     <div className="Pricing-cards">
        {/* Starter Plan */}
         <div className="pricing-card">
               <h2>Starter</h2>
               <p className="price">$99 <span>/month</span></p>
               <p className='description'>Perfect for small teams getting started with AI agents.</p>
               <div>
                  <p>✔ Up to 3 custom agents</p>
                  <p>✔ 500 monthly credits</p>
                  <p>✔ 2 team members</p>
                  <p>✔ Basic knowledge base (5GB)</p>
                  <p>✔ Email support</p>
                  <p>✔ Standard LLM models</p>
               </div>
               <button className="card-button">Start Free Trial</button>
         </div>
         {/* Professional Plan */}
         <div className="pricing-card most-popular">
            <h2>Professional</h2>
            <p className="price">$299 <span id='month'>/month</span></p>
            <p className="description">Ideal for growing businesses with advanced needs.</p>
            <div>
              <p>✔ Up to 10 custom agents</p>
              <p>✔ 2,000 monthly credits</p>
              <p>✔ 5 team members</p>
              <p>✔ Advanced knowledge base (20GB)</p>
              <p>✔ Priority support</p>
              <p>✔ Premium LLM models</p>
              <p>✔ Custom branding</p>
              <p>✔ API access</p>
            </div>
            <button className="card-button highlighted">Get Started</button>
         </div>
         {/* Enterprise plan */}
         <div className='pricing-card'>
              <h2>Enterprise</h2>
               <p className="price">Custom</p>
               <p className='description'>
                For Large Institutions with Complex Requirements.
               </p>
               <div>
                   <p>✔ Unlimited custom agents</p>
                   <p>✔ Custom credit allocation</p>
                   <p>✔ Unlimited team members</p>
                   <p>✔ Enterprise knowledge base</p>
                   <p>✔ 24/7 dedicated support</p>
                   <p>✔ All LLM models + custom training</p>
                   <p>✔ Custom integrations</p>
                   <p>✔ Compliance & security features</p>
                   <p>✔ On-premise deployment options</p>
               </div>
               <button className="card-button">Contact Sales</button>
         </div>
         
     </div>
     <div className='compareplans'>
             <div>
                  <h2 className='compare-header'>Compare Plans</h2>
                  <p className='compare-sub'>See which plan is right for your business</p>
             </div>
             <div className='feature-head2'>
                  <p>Feature</p>
                  <p>Starter</p>
                  <p>Professional</p>
                  <p>Enterprise</p>
             </div>
             <div className='feature-head3'>
                   <p>Custom <br />Agents</p>
                  <p>Up to 3</p>
                  <p>Up to 10</p>
                  <p>Unlimited</p>
             </div>
             <div className='feature-head3'>
                   <p>Custom <br />Monthly <br /> Credits</p>
                  <p>500</p>
                  <p>2,000</p>
                  <p>Custom</p>
             </div>
             <div className='feature-head3'>
                   <p>Team <br />Members</p>
                  <p>500</p>
                  <p>2,000</p>
                  <p>Custom</p>
             </div>
             <div className='feature-head3'>
                   <p>Knowledge <br />Base <br />Storage</p>
                  <p>5GB</p>
                  <p>20GB</p>
                  <p>Custom</p>
             </div>
             <div className='feature-head3'>
                   <p>Support</p>
                  <p>5GB</p>
                  <p>20GB</p>
                  <p>Custom</p>
             </div>
         </div>

        <div className='frequently'>
              <div>
                  <h4>Frequently Asked Questions</h4>
              </div>
              <div className='frequently-sub'>
                  <div >
                      <p>What are credits?</p>
                      <p className='frequent-para'>Credits are our unified billing system for AI usage. They cover agent interactions, knowledge processing, and model usage.</p>
                  </div>
                  <div>
                      <p>Can I change my plan later?</p>
                      <p  className='frequent-para'>Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.</p>
                  </div>
              </div>
              <div className='frequently-sub'>
                  <div >
                      <p>Is there a free trial?</p>
                      <p className='frequent-para'>Yes, all plans come with a 14-day free trial so you can test the features before committing.</p>
                  </div>
                  <div>
                      <p>Do credits roll over?</p>
                      <p  className='frequent-para'>Unused credits expire at the end of your billing cycle. Enterprise plans can negotiate rollover terms..</p>
                  </div>
              </div>
        </div>
        <div className="pricing-cta">
            <h2>Ready to get started?</h2>
            <p>Sign up today and transform your lending operations with AI.</p>
            <div className="cta-buttons">
              <button className="try-btn">Try For Free</button>
              <button className="contact-btn">Contact Sales</button>
            </div>
          </div>
    </>
  )
}

export default pricing;