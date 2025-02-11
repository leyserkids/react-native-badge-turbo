package com.grapecity.leyser.badge

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = BadgeTurboModule.NAME)
class BadgeTurboModule(reactContext: ReactApplicationContext) :
  NativeBadgeTurboSpec(reactContext) {

  override fun getName(): String {
    return NAME
  }

  override fun getBadgeCount(promise: Promise) {
    promise.resolve(BadgeHelper(reactApplicationContext).getBadgeCount())
  }

  override fun setBadgeCount(count: Double, promise: Promise) {
    promise.resolve(BadgeHelper(reactApplicationContext).setBadgeCount(count.toInt()))
  }

  override fun isBadgeSupported(promise: Promise) {
    promise.resolve(BadgeHelper(reactApplicationContext).isBadgeSupported())
  }

  companion object {
    const val NAME = "BadgeTurbo"
  }
}
