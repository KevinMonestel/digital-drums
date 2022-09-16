export default interface DrumConfigurationType {
  id: number,
  keyword_code: string,
  drum_set_id: string,
  drum_part_id: number,
  volume: number,
  sound_url: string,
  created_at: Date,
  updated_at: Date
}