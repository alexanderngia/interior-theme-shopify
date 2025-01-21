function veda_fn_id_9c69d2179ae74ff59d2a148775963cb7() {
    
    try {
      const uniqueId = /* _____Start/Id_____ */"id_9c69d217-9ae7-4ff5-9d2a-148775963cb7"/* _____End/Id_____ */;
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]:not(addons, megamenu)`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        /* _____Start/Content_____ */
        
        /* _____End/Content_____ */
      });
    } catch (error) {
      console.log(error);
    }
  };
veda_fn_id_9c69d2179ae74ff59d2a148775963cb7();
