/*
 * Pfizer configuration object
 */
var pfConfig = {
  /* Set to 'dev' when the s_code is in development. Set to 'prod' when in production */
  mode: 'dev',
  /* Dev and Production SC report suites this s_code is used with */
  reportSuites: {
    dev: 'pfizeruspccdevpsaxeljanz,pfizerglobalimpatientsdev',
    prod: 'pfizeruspccprodpsaxeljanz,pfizerglobalimpatientsprod'
  },
  /* Dev and Production domains this s_code is used with */
  domains: {
    dev: 'pfpsaxeljanzcomdev.prod.acquia-sites.com',
    prod: 'psa.xeljanz.com'
  },
  /* Site Names */
  siteNames: {
    dev: 'US PCC Dev Psaxeljanz',
    prod: 'US PCC Prod Psaxeljanz'
  },
  /* refer to TechSpec section "Site Section Tracking" */
  siteSection: {
    prefix: '',
    prefixHost: false,
    delimiter: '>'
  },
  /* refer to TechSpec section "Page Naming Strategy" */
  pageName: {
    base: 'path',
    prefix: '',
    delimiter: '>',
    homePage: 'home'
  },
  /* refer to TechSpec section "Custom Link Tracking" */
  customLinks: [],
  /* Comma separated Campaign Parameters */
  campaignParams: 'src_code,cmp,cbn,cid',
  /* Tracking Servers for FPC */
  trackingServer: '',
  trackingServerSecure: '',
  /* Country Code */
  siteCountry: "US",
  /* Visitor ID Flag */
  enableVisitorId: false
};
/* 
* As fallback in case Automation script does not replace this value with actual mode 
* For testing in local environment
*/
if(pfConfig.mode !== 'prod'){
	pfConfig.mode = "dev";
} 
