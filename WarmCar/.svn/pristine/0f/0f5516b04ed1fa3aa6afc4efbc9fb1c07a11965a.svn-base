import cookie from 'js-cookie'

export default function (context) {
  let {app, route} = context
  // 埋点
  if (route.name === 'pb-course-id') {
    app.$api.pb['course/click']({
      clickType: 'curriculum',
      clickPk: route.params.id
    })
  } else if (route.name === 'pb-file-picture-id') {
    app.$api.pb['course/click']({
      clickType: 'courseware',
      clickPk: route.params.id
    })
  } else if (route.name === 'pb-file-video-id') {
    app.$api.pb['course/click']({
      clickType: 'courseware',
      clickPk: route.params.id
    })
  } else if (route.name === 'pb-file-pdf-id') {
    app.$api.pb['course/click']({
      clickType: 'courseware',
      clickPk: route.params.id
    })
  } else if (route.name === 'vt-activity-id') {
    app.$api.vt['activity/click']({
      voluntaryActivityPkno: route.params.id
    })
  }
}