export default [
  {
    title: 'Home',
    to: { name: 'index' },
    icon: { icon: 'tabler-smart-home' },
    
  },
  {
    title: 'Kubeflow Clusters',
    to: { name: 'kubeflow-tab', params: { tab: 'clusters' } },
    icon: { icon: 'custom-kubeflow-color' },
  },
  {
    title: 'Flyte Clusters',
    to: { name: 'flyte' },
    disable: true,
    badgeContent:'Soon',
    badgeClass:'bg-secondary',
    icon: { icon: 'custom-flyte-black' },
  },
  {
    title: 'Object Storage',
    to: { name: 'object-storage-tab', params: { tab: 'storages' } },

    badgeClass:'bg-secondary',
    icon: { icon: 'tabler-packages' },
  },
  {
    title: 'Monitoring',
    disable: true,
    badgeContent:'Soon',
    badgeClass:'bg-secondary',
    to: { name: 'monitoring' },
    icon: { icon: 'tabler-device-heart-monitor' },
  },
]
