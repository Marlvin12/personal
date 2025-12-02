'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const SOCIAL_APPS = [
  { id: 'tiktok', name: 'TikTok', icon: '▶' },
  { id: 'instagram', name: 'Instagram', icon: '◎' },
  { id: 'linkedin', name: 'LinkedIn', icon: '▣' },
  { id: 'facebook', name: 'Facebook', icon: '▢' },
  { id: 'twitter', name: 'X/Twitter', icon: '✕' },
  { id: 'reddit', name: 'Reddit', icon: '◉' },
]

interface DayLog {
  date: string
  appsAvoided: string[]
}

function formatDate(date: Date): string {
  return date.toISOString().split('T')[0]
}

function formatDisplayDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  })
}

function getStreakCount(logs: DayLog[]): number {
  if (logs.length === 0) return 0

  const validAppIds = SOCIAL_APPS.map((app) => app.id)
  const sortedLogs = [...logs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  let streak = 0
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  for (let i = 0; i < sortedLogs.length; i++) {
    const logDate = new Date(sortedLogs[i].date)
    logDate.setHours(0, 0, 0, 0)

    const expectedDate = new Date(today)
    expectedDate.setDate(expectedDate.getDate() - i)

    if (logDate.getTime() === expectedDate.getTime()) {
      const validCount = sortedLogs[i].appsAvoided.filter((id) =>
        validAppIds.includes(id)
      ).length
      if (validCount === SOCIAL_APPS.length) {
        streak++
      } else {
        break
      }
    } else if (logDate.getTime() < expectedDate.getTime()) {
      break
    }
  }

  return streak
}

export default function TrackerPage() {
  const [logs, setLogs] = useState<DayLog[]>([])
  const [todayApps, setTodayApps] = useState<string[]>([])

  const today = formatDate(new Date())

  useEffect(() => {
    const savedLogs = localStorage.getItem('detox-logs')
    if (savedLogs) {
      const parsedLogs: DayLog[] = JSON.parse(savedLogs)
      setLogs(parsedLogs)

      const todayLog = parsedLogs.find((log) => log.date === today)
      if (todayLog) {
        setTodayApps(todayLog.appsAvoided)
      }
    }
  }, [today])

  const toggleApp = (appId: string) => {
    const newApps = todayApps.includes(appId)
      ? todayApps.filter((id) => id !== appId)
      : [...todayApps, appId]

    setTodayApps(newApps)

    const existingLogIndex = logs.findIndex((log) => log.date === today)
    let newLogs: DayLog[]

    if (existingLogIndex >= 0) {
      newLogs = logs.map((log, index) =>
        index === existingLogIndex ? { ...log, appsAvoided: newApps } : log
      )
    } else {
      newLogs = [...logs, { date: today, appsAvoided: newApps }]
    }

    setLogs(newLogs)
    localStorage.setItem('detox-logs', JSON.stringify(newLogs))
  }

  const markAllAvoided = () => {
    const allAppIds = SOCIAL_APPS.map((app) => app.id)
    setTodayApps(allAppIds)

    const existingLogIndex = logs.findIndex((log) => log.date === today)
    let newLogs: DayLog[]

    if (existingLogIndex >= 0) {
      newLogs = logs.map((log, index) =>
        index === existingLogIndex ? { ...log, appsAvoided: allAppIds } : log
      )
    } else {
      newLogs = [...logs, { date: today, appsAvoided: allAppIds }]
    }

    setLogs(newLogs)
    localStorage.setItem('detox-logs', JSON.stringify(newLogs))
  }

  const streak = getStreakCount(logs)
  const validAppIds = SOCIAL_APPS.map((app) => app.id)
  const totalCleanDays = logs.filter((log) => {
    const validCount = log.appsAvoided.filter((id) =>
      validAppIds.includes(id)
    ).length
    return validCount === SOCIAL_APPS.length
  }).length

  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() - i)
    return formatDate(date)
  }).reverse()

  return (
    <main className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <Link
          href="/detox"
          className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-600 hover:text-gray-900 mb-8 sm:mb-12 transition-colors"
        >
          <span>&larr;</span> back to essay
        </Link>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-3 sm:mb-4">
          detox tracker
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mb-10 sm:mb-16 max-w-2xl">
          reclaiming attention, one day at a time.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="section-border bg-white p-6">
            <div className="text-4xl sm:text-5xl font-normal text-accent mb-2">
              {streak}
            </div>
            <div className="text-sm text-gray-600">day streak</div>
          </div>
          <div className="section-border bg-white p-6">
            <div className="text-4xl sm:text-5xl font-normal mb-2">
              {totalCleanDays}
            </div>
            <div className="text-sm text-gray-600">total clean days</div>
          </div>
        </div>

        {/* Today's Log */}
        <div className="section-border bg-white p-6 sm:p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-normal">
              today: {formatDisplayDate(today)}
            </h2>
            <button
              onClick={markAllAvoided}
              className="text-sm text-gray-600 hover:text-accent transition-colors underline"
            >
              mark all
            </button>
          </div>

          <p className="text-sm text-gray-600 mb-6">
            tap apps you successfully avoided today:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {SOCIAL_APPS.map((app) => {
              const isAvoided = todayApps.includes(app.id)
              return (
                <button
                  key={app.id}
                  onClick={() => toggleApp(app.id)}
                  className={`p-4 border transition-all ${
                    isAvoided
                      ? 'border-accent bg-red-50 text-accent'
                      : 'border-dashed border-gray-300 text-gray-500 hover:border-gray-400'
                  }`}
                >
                  <div className="text-2xl mb-1">{app.icon}</div>
                  <div className="text-sm">{app.name}</div>
                  {isAvoided && (
                    <div className="text-xs mt-1 opacity-70">avoided</div>
                  )}
                </button>
              )
            })}
          </div>

          {todayApps.length === SOCIAL_APPS.length && (
            <div className="mt-6 text-center text-accent text-sm">
              + perfect day - all apps avoided +
            </div>
          )}
        </div>

        {/* Week Overview */}
        <div className="section-border bg-white p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-normal mb-6">last 7 days</h2>
          <div className="flex gap-2 justify-between">
            {last7Days.map((date) => {
              const log = logs.find((l) => l.date === date)
              const validAppIds = SOCIAL_APPS.map((app) => app.id)
              const count = log
                ? log.appsAvoided.filter((id) => validAppIds.includes(id)).length
                : 0
              const isPerfect = count === SOCIAL_APPS.length
              const isToday = date === today

              return (
                <div key={date} className="flex-1 text-center">
                  <div
                    className={`h-12 sm:h-16 flex items-center justify-center border ${
                      isPerfect
                        ? 'bg-accent text-white border-accent'
                        : count > 0
                          ? 'bg-red-50 border-red-200 text-accent'
                          : 'border-dashed border-gray-300 text-gray-400'
                    }`}
                  >
                    {count}/{SOCIAL_APPS.length}
                  </div>
                  <div
                    className={`text-xs mt-2 ${isToday ? 'text-accent' : 'text-gray-500'}`}
                  >
                    {new Date(date).toLocaleDateString('en-US', {
                      weekday: 'short',
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}

