export interface MemberListItem {
  id: number;
  nickname: string;
  iconImageId: string;
  twitterUserId: string | null;
  birthday: Date | null;
  prefectures: string;
  techs: string[];
}

export const MemberListItemInitial: MemberListItem = {
  id: 0,
  nickname: '',
  iconImageId: '',
  twitterUserId: null,
  birthday: null,
  prefectures: '',
  techs: [],
};
