import { defineStore } from 'pinia'

export const useActivityStore = defineStore('activities', {
  state: () => ({
    activities: JSON.parse(localStorage.getItem('activities') || '[]')
  }),
  actions: {
    addActivity(activity) {
      this.activities.push({ id: Date.now(), ...activity })
      this.save()
    },
    updateActivity(updated) {
      this.activities = this.activities.map(a => a.id === updated.id ? updated : a)
      this.save()
    },
    deleteActivity(id) {
      this.activities = this.activities.filter(a => a.id !== id)
      this.save()
    },
    save() {
      localStorage.setItem('activities', JSON.stringify(this.activities))
    }
  }
})
