import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../graphql/mutations";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Comment } from "react-loader-spinner";

//Helpers
import notify from "../helpers/toastify";
import validate from "../helpers/validate";
import { formatDate } from "../helpers/helper";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function CommentForm({ slug }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    text: "",
  });
  const { name, email, text } = form;
  const datePublished = formatDate(new Date());

  const [sendComment, { loading, data, error }] = useMutation(SEND_COMMENT, {
    variables: { name, email, text, slug, datePublished },
  });
  const [errors, setErrors] = useState({});

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  };

  const sendCommentHandler = () => {
    setErrors(validate(form));
    const isError = validate(form);
    if (!Object.keys(isError).length) {
      sendComment();
      setForm({ name: "", email: "", text: "" });
    } else {
      notify("warn", "لطفا همه فیلد ها را با دقت پر کنید✍️");
    }
  };

  useEffect(() => {
    if (data) {
      notify(
        "success",
        "دیدگاه شما با موفقیت ثبت شد و پس از تایید، نمایش داده میشود✨"
      );
    }
  }, [data]);

  return (
    <Grid
      container
      gap={3}
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0 4px 12px",
        borderRadius: 4,
        py: 2,
        px: 4,
      }}
    >
      <Grid item xs={12}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          ارسال نظر
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <CacheProvider value={cacheRtl}>
          <TextField
            label="نام کاربری"
            value={form.name}
            name="name"
            onChange={changeHandler}
            sx={{ width: "100%" }}
          />
        </CacheProvider>
        {errors.name && (
          <Typography
            color="error.light"
            component="span"
            variant="span"
            display="inline-block"
            mt={1}
          >
            {errors.name}
          </Typography>
        )}
      </Grid>
      <Grid item xs={12}>
        <CacheProvider value={cacheRtl}>
          <TextField
            label="ایمیل"
            value={form.email}
            name="email"
            onChange={changeHandler}
            sx={{ width: "100%" }}
          />
        </CacheProvider>
        {errors.email && (
          <Typography
            color="error.light"
            component="span"
            variant="span"
            display="inline-block"
            mt={1}
          >
            {errors.email}
          </Typography>
        )}
      </Grid>
      <Grid item xs={12}>
        <CacheProvider value={cacheRtl}>
          <TextField
            label="متن"
            value={form.text}
            name="text"
            multiline
            minRows={4}
            onChange={changeHandler}
            sx={{ width: "100%" }}
          />
        </CacheProvider>
        {errors.text && (
          <Typography
            color="error.light"
            component="span"
            variant="span"
            display="inline-block"
            mt={1}
          >
            {errors.text}
          </Typography>
        )}
      </Grid>
      <Grid item xs={12}>
        {loading ? (
          <Comment width="60" height="60" backgroundColor="#1976d2" />
        ) : (
          <Button variant="contained" onClick={sendCommentHandler}>
            ارسال
          </Button>
        )}
      </Grid>
      <ToastContainer rtl={true} />
    </Grid>
  );
}

export default CommentForm;
