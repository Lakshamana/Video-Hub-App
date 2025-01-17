import { SettingsButton } from './settings-buttons.interface';

// Add `SettingsButtons` items here so they show up in the buttons ribbon and in the settings
// Each array separates buttons into their own button groups visually
export const SettingsButtonsGroups: string[][] = [
  [
    'hideSidebar',
  ],
  [
    'folderUnion',
    'folderIntersection',
    'fileUnion',
    'fileIntersection',
    'exclude',
    'tagUnion',
    'tagIntersection',
    'tagExclusion',
    'magic',
  ],
  [
    'durationFilter',
    'resolutionFilter',
    'starFilter',
    'sortOrder',
    'sortOptionTime',
    'sortOptionSize',
    'sortOptionTimesPlayed',
    'sortOptionStar',
    'sortOptionYear',
    'sortOptionModified',
  ],
  [
    'showFreq',
    'extendedWordCloud',
    'showRecent'
  ],
  [
    'showThumbnails',
    'showFilmstrip',
    'showFullView',
    'showDetails',
    'showFiles',
    'showClips',
  ],
  [
    'showRelatedVideosTray',
  ],
  [
    'showTags',
    'autoFileTags',
    'autoFolderTags',
  ],
  [
    'showTagTray',
    'manualTags',
    'tagFrequencySort'
  ],
  [
    'showMoreInfo',
    'fontSizeLarger',
    'hoverScrub',
    'muteClips',
    'returnToFirstScreenshot',
    'autoplayClips',
    'randomImage',
    'randomizeGallery',
    'shuffleGalleryNow',
    'showFolders'
  ],
  [
    'makeSmaller',
    'makeLarger',
  ],
  [
    'darkMode',
  ],
  [
    'hideTop',
    'flatIcons'
  ],
  [
    'startWizard',
    'rescanDirectory',
    'importNewFiles',
    'verifyThumbnails',
    'regenerateLibrary',
    'resetSettings',
    'clearHistory'
  ]
];

export const SettingsMetaGroup: any = [
  [
    ...SettingsButtonsGroups[0],
    'break',
    ...SettingsButtonsGroups[1],
    'break',
    ...SettingsButtonsGroups[2],
    'break',
    ...SettingsButtonsGroups[3],
  ],
  [
    ...SettingsButtonsGroups[4],
    'break',
    ...SettingsButtonsGroups[5],
    'break',
    ...SettingsButtonsGroups[6],
    'break',
    ...SettingsButtonsGroups[7],
    'break',
    ...SettingsButtonsGroups[8],
    'break',
    ...SettingsButtonsGroups[9],
    'break',
    ...SettingsButtonsGroups[10],
    'break',
    ...SettingsButtonsGroups[11],
  ],
  [
    ...SettingsButtonsGroups[12],
  ],
];

// correspond to each group above
export const SettingsMetaGroupLabels: string[] = [
  'SETTINGS.searchAndFilter',
  'SETTINGS.galleryAndView',
  'SETTINGS.otherSettings',
  'SETTINGS.reloadUpdate' // CURRENTLY UNUSED
];

export let SettingsButtons: { [s: string]: SettingsButton } = {
  'autoFileTags': {
    description: 'BUTTONS.autoFileTagsDescription',
    hidden: true,
    iconName: 'icon-cloud',
    title: 'BUTTONS.autoFileTagsHint',
    toggled: true
  },
  'autoFolderTags': {
    description: 'BUTTONS.autoFolderTagsDescription',
    hidden: true,
    iconName: 'icon-cloud',
    title: 'BUTTONS.autoFolderTagsHint',
    toggled: false
  },
  'autoplayClips': {
    description: 'BUTTONS.autoplayClipsDescription',
    hidden: true,
    iconName: 'icon-toggle-scrub',
    title: 'BUTTONS.autoplayClipsHint',
    toggled: false
  },
  'clearHistory': {
    description: 'BUTTONS.clearHistoryDescription',
    hidden: false,
    iconName: 'icon-checkmark',
    // this specific icon makes the setting only appear in All Settings (behind gear button)
    title: 'BUTTONS.clearHistoryHint',
    toggled: false
  },
  'darkMode': {
    description: 'BUTTONS.darkModeDescription',
    hidden: false,
    iconName: 'icon-darken',
    settingsHeading: 'SETTINGS.darkMode',
    title: 'BUTTONS.darkModeHint',
    toggled: false
  },
  'durationFilter': {
    description: 'BUTTONS.durationFilterDescription',
    hidden: false,
    iconName: 'icon-hourglass',
    settingsHeading: 'SETTINGS.sortingFilters',
    title: 'BUTTONS.durationFilterHint',
    toggled: false
  },
  'exclude': {
    description: 'BUTTONS.excludeDescription',
    hidden: true,
    iconName: 'icon-video-x',
    title: 'BUTTONS.excludeHint',
    toggled: false
  },
  'extendedWordCloud': {
    description: 'BUTTONS.extendedWordCloudDescription',
    hidden: false,
    iconName: 'icon-cloud-plus',
    title: 'BUTTONS.extendedWordCloudHint',
    toggled: false
  },
  'fileIntersection': {
    description: 'BUTTONS.fileDescription',
    hidden: false,
    iconName: 'icon-video-minus',
    title: 'BUTTONS.fileHint',
    toggled: true
  },
  'fileUnion': {
    description: 'BUTTONS.fileUnionDescription',
    hidden: true,
    iconName: 'icon-video-plus',
    title: 'BUTTONS.fileUnionHint',
    toggled: false
  },
  'flatIcons': {
    description: 'BUTTONS.flatIconsDescription',
    hidden: false,
    iconName: 'icon-checkmark',
    settingsHeading: 'SETTINGS.buttonStyle',
    // this specific icon makes the setting only appear in All Settings (behind gear button)
    title: 'BUTTONS.flatIconsHint',
    toggled: false
  },
  'folderIntersection': {
    description: 'BUTTONS.folderDescription',
    hidden: false,
    iconName: 'icon-folder-minus',
    title: 'BUTTONS.folderHint',
    toggled: true
  },
  'folderUnion': {
    description: 'BUTTONS.folderUnionDescription',
    hidden: true,
    iconName: 'icon-folder-plus',
    settingsHeading: 'SETTINGS.searchFilters',
    title: 'BUTTONS.folderUnionHint',
    toggled: false
  },
  'fontSizeLarger': {
    description: 'BUTTONS.fontSizeLargerDescription',
    hidden: true,
    iconName: 'icon-larger',
    title: 'BUTTONS.fontSizeLargerHint',
    toggled: false
  },
  'hideSidebar': {
    description: 'BUTTONS.hideSidebarDescription',
    hidden: false,
    iconName: 'icon-chevron-left',
    title: 'BUTTONS.hideSidebarHint',
    toggled: false
  },
  'hideTop': {
    description: 'BUTTONS.hideTopDescription',
    hidden: false,
    iconName: 'icon-chevron-up',
    settingsHeading: 'SETTINGS.hideTopBar',
    title: 'BUTTONS.hideTopHint',
    toggled: false
  },
  'hoverScrub': {
    description: 'BUTTONS.hoverScrubDescription',
    hidden: true,
    iconName: 'icon-toggle-scrub',
    title: 'BUTTONS.hoverScrubHint',
    toggled: true
  },
  // TODO: Make these able to add to the button bar!
  'importNewFiles': {
    description: 'BUTTONS.importNewFilesDescription',
    hidden: false,
    iconName: 'icon-checkmark',
    // this specific icon makes the setting only appear in All Settings (behind gear button)
    title: 'BUTTONS.importNewFilesHint',
    toggled: false
  },
  'magic': {
    description: 'BUTTONS.magicDescription',
    hidden: false,
    iconName: 'icon-looking-glass',
    moreInfo: 'BUTTONS.magicMoreInfo',
    title: 'BUTTONS.magicHint',
    toggled: true
  },
  'makeLarger': {
    description: 'BUTTONS.makeLargerDescription',
    hidden: false,
    iconName: 'icon-plus',
    title: 'BUTTONS.makeLargerHint',
    toggled: false
  },
  'makeSmaller': {
    description: 'BUTTONS.makeSmallerDescription',
    hidden: false,
    iconName: 'icon-minus',
    settingsHeading: 'SETTINGS.zoom',
    title: 'BUTTONS.makeSmallerHint',
    toggled: false
  },
  'manualTags': {
    description: 'BUTTONS.manualTagsDescription',
    hidden: true,
    iconName: 'icon-cloud',
    title: 'BUTTONS.manualTagsHint',
    toggled: true
  },
  'muteClips': {
    description: 'BUTTONS.muteClipsDescription',
    hidden: true,
    iconName: 'icon-toggle-scrub',
    title: 'BUTTONS.muteClipsHint',
    toggled: true
  },
  'randomImage': {
    description: 'BUTTONS.randomImageDescription',
    hidden: true,
    iconName: 'icon-random',
    title: 'BUTTONS.randomImageHint',
    toggled: false
  },
  'randomizeGallery': {
    description: 'BUTTONS.randomizeGalleryDescription',
    hidden: true,
    iconName: 'icon-random',
    title: 'BUTTONS.randomizeGalleryHint',
    toggled: false
  },
  'regenerateLibrary': {
    description: 'BUTTONS.regenerateLibraryDescription',
    hidden: false,
    iconName: 'icon-checkmark',
    // this specific icon makes the setting only appear in All Settings (behind gear button)
    title: 'BUTTONS.regenerateLibraryHint',
    toggled: false
  },
  'rescanDirectory': {
    description: 'BUTTONS.rescanDirectoryDescription',
    hidden: false,
    iconName: 'icon-checkmark',
    settingsHeading: 'SETTINGS.currentHub',
    // this specific icon makes the setting only appear in All Settings (behind gear button)
    title: 'BUTTONS.rescanDirectoryHint',
    toggled: false
  },
  'resetSettings': {
    description: 'BUTTONS.resetSettingsDescription',
    hidden: false,
    iconName: 'icon-checkmark',
    settingsHeading: 'SETTINGS.variousSettings',
    // this specific icon makes the setting only appear in All Settings (behind gear button)
    title: 'BUTTONS.resetSettingsHint',
    toggled: false
  },
  'resolutionFilter': {
    description: 'BUTTONS.resolutionFilterDescription',
    hidden: false,
    iconName: 'icon-res-filter',
    title: 'BUTTONS.resolutionFilterHint',
    toggled: false
  },
  'returnToFirstScreenshot': {
    description: 'BUTTONS.returnToFirstScreenshotDescription',
    hidden: true,
    iconName: 'icon-toggle-scrub',
    title: 'BUTTONS.returnToFirstScreenshotHint',
    toggled: true
  },
  'showClips': {
    description: 'BUTTONS.showClipsDescription',
    hidden: false,
    iconName: 'icon-video-blank',
    title: 'BUTTONS.showClipsHint',
    toggled: false
  },
  'showDetails': {
    description: 'BUTTONS.showDetailsDescription',
    hidden: false,
    iconName: 'icon-show-details',
    title: 'BUTTONS.showDetailsHint',
    toggled: false
  },
  'showFiles': {
    description: 'BUTTONS.showFilesDescription',
    hidden: false,
    iconName: 'icon-show-filenames',
    title: 'BUTTONS.showFilesHint',
    toggled: false
  },
  'showFilmstrip': {
    description: 'BUTTONS.showFilmstripDescription',
    hidden: false,
    iconName: 'icon-show-filmstrip',
    title: 'BUTTONS.showFilmstripHint',
    toggled: false
  },
  'showFolders': {
    description: 'BUTTONS.showFoldersDescription',
    hidden: true,
    iconName: 'icon-folder-blank',
    title: 'BUTTONS.showFoldersHint',
    toggled: true
  },
  'showFreq': {
    description: 'BUTTONS.showFreqDescription',
    hidden: false,
    iconName: 'icon-cloud',
    settingsHeading: 'SETTINGS.wordCloud',
    title: 'BUTTONS.showFreqHint',
    toggled: false
  },
  'showFullView': {
    description: 'BUTTONS.showFullViewDescription',
    hidden: false,
    iconName: 'icon-show-full-view',
    title: 'BUTTONS.showFullViewHint',
    toggled: false
  },
  'showMoreInfo': {
    description: 'BUTTONS.showMoreInfoDescription',
    hidden: false,
    iconName: 'icon-tag',
    settingsHeading: 'SETTINGS.miscView',
    title: 'BUTTONS.showMoreInfoHint',
    toggled: true
  },
  'showRecent': {
    description: 'BUTTONS.showRecentDescription',
    hidden: false,
    iconName: 'icon-show-filenames',
    title: 'BUTTONS.showRecentHint',
    toggled: false
  },
  'showRelatedVideosTray': {
    description: 'BUTTONS.relatedTrayDescription',
    hidden: false,
    iconName: 'icon-show-thumbnails',
    settingsHeading: 'SETTINGS.relatedVideosTray',
    title: 'BUTTONS.relatedTrayHint',
    toggled: false
  },
  'showTags': {
    description: 'BUTTONS.showTagsDescription',
    hidden: false,
    iconName: 'icon-tag',
    moreInfo: 'BUTTONS.showTagsMoreInfo',
    settingsHeading: 'SETTINGS.autoGenerated',
    title: 'BUTTONS.showTagsHint',
    toggled: false
  },
  'showTagTray': {
    description: 'BUTTONS.tagTrayDescription',
    hidden: false,
    iconName: 'icon-tag',
    settingsHeading: 'SETTINGS.manualTags',
    title: 'BUTTONS.tagTrayHint',
    toggled: false
  },
  'showThumbnails': {
    description: 'BUTTONS.showThumbnailsDescription',
    hidden: false,
    iconName: 'icon-show-thumbnails',
    title: 'BUTTONS.showThumbnailsHint',
    toggled: true
  },
  'shuffleGalleryNow': {
    description: 'BUTTONS.shuffleGalleryNowDescription',
    hidden: false,
    iconName: 'icon-random',
    title: 'BUTTONS.shuffleGalleryNowHint',
    toggled: false
  },
  'sortOptionModified': {
    description: 'BUTTONS.sortOptionModifiedDescription',
    hidden: false,
    iconName: 'icon-checkmark',
    title: '',
    toggled: false
  },
  'sortOptionSize': {
    description: 'BUTTONS.sortOptionSizeDescription',
    hidden: false,
    iconName: 'icon-checkmark',
    title: '',
    toggled: true
  },
  'sortOptionStar': {
    description: 'BUTTONS.sortOptionStarDescription',
    hidden: false,
    iconName: 'icon-checkmark',
    title: '',
    toggled: false
  },
  'sortOptionTime': {
    description: 'BUTTONS.sortOptionTimeDescription',
    hidden: false,
    iconName: 'icon-checkmark',
    settingsHeading: 'BUTTONS.sortOptionsHeading',
    title: '',
    toggled: true
  },
  'sortOptionTimesPlayed': {
    description: 'BUTTONS.sortOptionTimesPlayedDescription',
    hidden: false,
    iconName: 'icon-checkmark',
    title: '',
    toggled: false
  },
  'sortOptionYear': {
    description: 'BUTTONS.sortOptionYearDescription',
    hidden: false,
    iconName: 'icon-checkmark',
    title: '',
    toggled: false
  },
  'sortOrder': {
    description: 'BUTTONS.sortOrderDescription',
    hidden: false,
    iconName: 'icon-res-filter',
    title: 'BUTTONS.sortOrderHint',
    toggled: false
  },
  'starFilter': {
    description: 'BUTTONS.starFilterDescription',
    hidden: false,
    iconName: 'icon-star',
    title: 'BUTTONS.starFilterHint',
    toggled: false
  },
  'startWizard': {
    description: 'BUTTONS.startWizardDescription',
    hidden: false,
    iconName: 'icon-checkmark',
    // this specific icon makes the setting only appear in All Settings (behind gear button)
    title: 'BUTTONS.startWizardHint',
    toggled: false
  },
  'tagExclusion': {
    description: 'BUTTONS.tagExclusionDescription',
    hidden: true,
    iconName: 'icon-video-x',
    title: 'BUTTONS.tagExclusionHint',
    toggled: false
  },
  'tagFrequencySort': {
    description: 'BUTTONS.tagFrequencySortDescription',
    hidden: false,
    iconName: 'icon-tag',
    title: 'BUTTONS.tagFrequencySortHint',
    toggled: false
  },
  'tagIntersection': {
    description: 'BUTTONS.tagIntersectionDescription',
    hidden: false,
    iconName: 'icon-video-minus',
    title: 'BUTTONS.tagIntersectionHint',
    toggled: false
  },
  'tagUnion': {
    description: 'BUTTONS.tagUnionDescription',
    hidden: true,
    iconName: 'icon-video-plus',
    title: 'BUTTONS.tagUnionHint',
    toggled: false
  },
  'verifyThumbnails': {
    description: 'BUTTONS.verifyThumbnailsDescription',
    hidden: false,
    iconName: 'icon-checkmark',
    // this specific icon makes the setting only appear in All Settings (behind gear button)
    title: 'BUTTONS.verifyThumbnailsHint',
    toggled: false
  }
};
