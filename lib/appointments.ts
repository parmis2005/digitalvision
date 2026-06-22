import { pool } from "./db";

export type AppointmentRecord = {
  appointmentDate: string;
  appointmentTime: string;
};

export async function ensureAppointmentsTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS appointments (
      id BIGSERIAL PRIMARY KEY,
      appointment_date DATE NOT NULL,
      appointment_time TEXT NOT NULL,
      email TEXT NOT NULL,
      project_type TEXT NOT NULL,
      services TEXT NOT NULL,
      website_scope TEXT NOT NULL,
      seo_competition TEXT NOT NULL,
      start_window TEXT NOT NULL,
      price_estimate TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      UNIQUE (appointment_date, appointment_time)
    );
  `);
}

export async function listAppointmentsForMonth(month: string) {
  const [yearText, monthText] = month.split("-");
  const year = Number(yearText);
  const monthIndex = Number(monthText);

  if (!Number.isInteger(year) || !Number.isInteger(monthIndex) || monthIndex < 1 || monthIndex > 12) {
    throw new Error("Invalid month.");
  }

  const monthStart = `${yearText}-${monthText}-01`;
  const nextMonthDate = new Date(year, monthIndex, 1);
  const nextMonth = formatDateKey(nextMonthDate);

  const result = await pool.query<{
    appointment_date: string;
    appointment_time: string;
  }>(
    `
      SELECT appointment_date::text, appointment_time
      FROM appointments
      WHERE appointment_date >= $1::date
        AND appointment_date < $2::date
      ORDER BY appointment_date ASC, appointment_time ASC
    `,
    [monthStart, nextMonth],
  );

  return result.rows.map((row) => ({
    appointmentDate: row.appointment_date,
    appointmentTime: row.appointment_time,
  }));
}

export async function createAppointment(input: {
  appointmentDate: string;
  appointmentTime: string;
  email: string;
  projectType: string;
  services: string;
  websiteScope: string;
  seoCompetition: string;
  startWindow: string;
  priceEstimate: string;
}) {
  const result = await pool.query<{ id: string }>(
    `
      INSERT INTO appointments (
        appointment_date,
        appointment_time,
        email,
        project_type,
        services,
        website_scope,
        seo_competition,
        start_window,
        price_estimate
      )
      VALUES ($1::date, $2, $3, $4, $5, $6, $7, $8, $9)
      ON CONFLICT (appointment_date, appointment_time) DO NOTHING
      RETURNING id
    `,
    [
      input.appointmentDate,
      input.appointmentTime,
      input.email,
      input.projectType,
      input.services,
      input.websiteScope,
      input.seoCompetition,
      input.startWindow,
      input.priceEstimate,
    ],
  );

  return result.rowCount === 1;
}

function formatDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
