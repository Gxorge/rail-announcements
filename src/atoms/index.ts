import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export const selectedTabIdsState = atomWithStorage<Record<string, string>>('selectedTabIds', {})

export const isPlayingAnnouncementState = atom<boolean>(false)

export const tabStatesState = atom<Record<string, Record<string, unknown>> | null>(null)
