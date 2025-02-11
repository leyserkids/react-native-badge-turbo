package com.grapecity.leyser.badge

import android.content.Context
import android.content.SharedPreferences
import android.util.Log
import me.leolin.shortcutbadger.ShortcutBadger

class BadgeHelper(private val context: Context) {
    private val sharedPreferences: SharedPreferences = context.getSharedPreferences(PREFERENCES_FILE, Context.MODE_PRIVATE)

    fun getBadgeCount(): Int {
        return sharedPreferences.getInt(BADGE_COUNT_KEY, 0)
    }

    fun setBadgeCount(badgeCount: Int): Boolean {
        persistentBadgeCount(badgeCount)
        return if (badgeCount <= 0) {
            Log.d(TAG, "Remove badge count.")
            ShortcutBadger.removeCount(context)
        } else {
            Log.d(TAG, "Apply badge count: $badgeCount.")
            ShortcutBadger.applyCount(context, badgeCount)
        }
    }

    fun isBadgeSupported(): Boolean {
        val current = getBadgeCount()
        return setBadgeCount(current)
    }

    private fun persistentBadgeCount(badgeCount: Int) {
        sharedPreferences.edit().apply {
            putInt(BADGE_COUNT_KEY, badgeCount)
            apply()
        }
    }

    companion object {
        const val TAG = "RNBadgeHelper"
        const val PREFERENCES_FILE = "BadgeCountFile"
        const val BADGE_COUNT_KEY = "BadgeCount"
    }
}