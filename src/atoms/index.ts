import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { atomFamily } from 'jotai-family'

export const selectedTabIdsState = atomWithStorage<Record<string, string>>('selectedTabIds', {})

export const isPlayingAnnouncementState = atom<boolean>(false)

/** Per-tab state atom. Key is `${systemId}::${tabId}`. Each tab subscribes only to its own atom. */
export const tabStateFamily = atomFamily((_stateKey: string) => atom<Record<string, unknown> | null>(null))
