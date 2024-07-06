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
    icon: { icon: 'custom-flyte-black' },
  },
  {
    title: 'Object Storage',
    to: { name: 'object-storage' },
    icon: { icon: 'tabler-box' },
  },
  {
    title: 'Monitoring',
    to: { name: 'monitoring' },
    icon: { icon: 'tabler-device-heart-monitor' },
  },
]
