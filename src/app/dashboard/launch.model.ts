export interface Launch {
    'flight_number': number;
    'mission_name': string;
    'mission_id': [];
    'upcoming': boolean;
    'launch_year': string;
    'launch_date_unix': number;
    'launch_date_utc': string;
    'launch_date_local': string;
    'is_tentative': boolean;
    'tentative_max_precision': string;
    'tbd': boolean;
    'launch_window': number;
    'rocket': {
      'rocket_id': string;
      'rocket_name': string;
      'rocket_type': string;
      'first_stage': {
        'cores': [
          {
            'core_serial': string;
            'flight': number;
            'block': any;
            'gridfins': boolean;
            'legs': boolean;
            'reused': boolean;
            'land_success': any;
            'landing_intent': boolean;
            'landing_type': any;
            'landing_vehicle': any;
          }
        ]
      };
      'second_stage': {
        'block': number;
        'payloads': []
      };
      'fairings': {}
    };
    'ships': [ ];
    'telemetry': {
      'flight_club': any;
    };
    'launch_site': {};
    'launch_success': boolean;
    'launch_failure_details': {};
    'links': {
      flickr_images: [string];
    };
    'details': string;
    'static_fire_date_utc': boolean;
    'static_fire_date_unix': number;
    'timeline': {};
    'crew': any;
  }
