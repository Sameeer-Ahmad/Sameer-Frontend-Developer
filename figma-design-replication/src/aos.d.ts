declare module "aos" {
    interface AOSOptions {
      duration?: number; // in milliseconds
      easing?: string; // easing function
      anchorPlacement?:string
     
    }
  
    interface AOS {
      init: (options?: AOSOptions) => void;
      refresh: () => void;
      refreshHard: () => void;
    }
  
    const AOS: AOS;
    export default AOS;
  }
  