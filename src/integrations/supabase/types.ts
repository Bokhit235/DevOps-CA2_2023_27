export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      profiles: {
        Row: {
          avatar_url: string | null
          city: string | null
          created_at: string
          full_name: string | null
          id: string
          phone: string | null
          province: string | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          city?: string | null
          created_at?: string
          full_name?: string | null
          id: string
          phone?: string | null
          province?: string | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          city?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          phone?: string | null
          province?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      report_images: {
        Row: {
          created_at: string
          id: string
          report_id: string
          storage_path: string
        }
        Insert: {
          created_at?: string
          id?: string
          report_id: string
          storage_path: string
        }
        Update: {
          created_at?: string
          id?: string
          report_id?: string
          storage_path?: string
        }
        Relationships: [
          {
            foreignKeyName: "report_images_report_id_fkey"
            columns: ["report_id"]
            isOneToOne: false
            referencedRelation: "reports"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "report_images_report_id_fkey"
            columns: ["report_id"]
            isOneToOne: false
            referencedRelation: "reports_public"
            referencedColumns: ["id"]
          },
        ]
      }
      report_status_history: {
        Row: {
          changed_by: string | null
          created_at: string
          id: string
          new_status: Database["public"]["Enums"]["report_status"]
          note: string | null
          old_status: Database["public"]["Enums"]["report_status"] | null
          report_id: string
        }
        Insert: {
          changed_by?: string | null
          created_at?: string
          id?: string
          new_status: Database["public"]["Enums"]["report_status"]
          note?: string | null
          old_status?: Database["public"]["Enums"]["report_status"] | null
          report_id: string
        }
        Update: {
          changed_by?: string | null
          created_at?: string
          id?: string
          new_status?: Database["public"]["Enums"]["report_status"]
          note?: string | null
          old_status?: Database["public"]["Enums"]["report_status"] | null
          report_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "report_status_history_report_id_fkey"
            columns: ["report_id"]
            isOneToOne: false
            referencedRelation: "reports"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "report_status_history_report_id_fkey"
            columns: ["report_id"]
            isOneToOne: false
            referencedRelation: "reports_public"
            referencedColumns: ["id"]
          },
        ]
      }
      reports: {
        Row: {
          address: string | null
          category: Database["public"]["Enums"]["report_category"]
          city: string | null
          created_at: string
          description: string
          id: string
          latitude: number
          longitude: number
          province: string | null
          reporter_id: string
          resolution_note: string | null
          reviewed_at: string | null
          reviewed_by: string | null
          severity: Database["public"]["Enums"]["report_severity"]
          status: Database["public"]["Enums"]["report_status"]
          title: string
          updated_at: string
        }
        Insert: {
          address?: string | null
          category: Database["public"]["Enums"]["report_category"]
          city?: string | null
          created_at?: string
          description: string
          id?: string
          latitude: number
          longitude: number
          province?: string | null
          reporter_id: string
          resolution_note?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          severity?: Database["public"]["Enums"]["report_severity"]
          status?: Database["public"]["Enums"]["report_status"]
          title: string
          updated_at?: string
        }
        Update: {
          address?: string | null
          category?: Database["public"]["Enums"]["report_category"]
          city?: string | null
          created_at?: string
          description?: string
          id?: string
          latitude?: number
          longitude?: number
          province?: string | null
          reporter_id?: string
          resolution_note?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          severity?: Database["public"]["Enums"]["report_severity"]
          status?: Database["public"]["Enums"]["report_status"]
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      reports_public: {
        Row: {
          category: Database["public"]["Enums"]["report_category"] | null
          city: string | null
          created_at: string | null
          description: string | null
          id: string | null
          latitude_approx: number | null
          longitude_approx: number | null
          province: string | null
          severity: Database["public"]["Enums"]["report_severity"] | null
          status: Database["public"]["Enums"]["report_status"] | null
          title: string | null
        }
        Insert: {
          category?: Database["public"]["Enums"]["report_category"] | null
          city?: string | null
          created_at?: string | null
          description?: string | null
          id?: string | null
          latitude_approx?: never
          longitude_approx?: never
          province?: string | null
          severity?: Database["public"]["Enums"]["report_severity"] | null
          status?: Database["public"]["Enums"]["report_status"] | null
          title?: string | null
        }
        Update: {
          category?: Database["public"]["Enums"]["report_category"] | null
          city?: string | null
          created_at?: string | null
          description?: string | null
          id?: string | null
          latitude_approx?: never
          longitude_approx?: never
          province?: string | null
          severity?: Database["public"]["Enums"]["report_severity"] | null
          status?: Database["public"]["Enums"]["report_status"] | null
          title?: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      app_role: "citizen" | "authority" | "admin"
      report_category:
        | "route"
        | "pont"
        | "ecole"
        | "sante"
        | "eau"
        | "marche"
        | "autre"
      report_severity: "vert" | "jaune" | "orange" | "rouge"
      report_status: "signale" | "verifie" | "en_cours" | "resolu" | "rejete"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["citizen", "authority", "admin"],
      report_category: [
        "route",
        "pont",
        "ecole",
        "sante",
        "eau",
        "marche",
        "autre",
      ],
      report_severity: ["vert", "jaune", "orange", "rouge"],
      report_status: ["signale", "verifie", "en_cours", "resolu", "rejete"],
    },
  },
} as const
