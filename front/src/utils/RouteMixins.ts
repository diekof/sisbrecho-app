export default function Route(
    nameRef: null | string,
    label: null | string,
    url: string,
    component: any,
    permissionKeys: null | string[]
  ) {
  
    return {
      nameRef: nameRef,
      label: label,
      to: url,
      icon: 'pi pi-circle-on',
      component: component,
      permissionKeys: Array.isArray(permissionKeys) && permissionKeys.length > 0 ? permissionKeys : null,
      visibleOnRouter: true,
    };
  }
  